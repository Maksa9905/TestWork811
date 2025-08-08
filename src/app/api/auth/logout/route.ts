import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const response = NextResponse.json(
      { message: 'Успешный выход' },
      { status: 200 },
    )

    response.cookies.delete('accessToken')
    response.cookies.delete('refreshToken')
    response.cookies.delete('isAuthorized')

    return response
  } catch (error) {
    console.error('API: Ошибка при logout:', error)

    return NextResponse.json({ error: 'Ошибка при выходе' }, { status: 500 })
  }
}
