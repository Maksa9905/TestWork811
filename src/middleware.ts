import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('Middleware: Выполняю middleware...')

  if (request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  const accessToken = request.cookies.get('accessToken')?.value
  const refreshToken = request.cookies.get('refreshToken')?.value

  if (accessToken || !refreshToken) {
    return NextResponse.next()
  }

  try {
    console.log('Middleware: Выполняю refresh токенов...')

    const baseUrl = process.env.NEXT_PUBLIC_API_URL

    const refreshResponse = await fetch(`${baseUrl}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken,
        refreshToken,
      }),
    })

    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json()

      console.log('Middleware: Токены успешно обновлены')

      const response = NextResponse.next()

      response.cookies.set('accessToken', refreshData.accessToken, {
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        httpOnly: false,
      })

      response.cookies.set('refreshToken', refreshData.refreshToken, {
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        httpOnly: false,
      })

      response.cookies.set('isAuthorized', 'true', {
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        httpOnly: false,
      })

      return response
    } else {
      console.log('Middleware: Ошибка refresh, удаляю токены')

      const response = NextResponse.next()

      response.cookies.delete('accessToken')
      response.cookies.delete('refreshToken')
      response.cookies.delete('isAuthorized')

      return response
    }
  } catch (error) {
    console.error('Middleware: Ошибка при refresh токенов:', error)

    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
