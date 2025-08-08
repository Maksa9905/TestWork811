import { UserController } from '@/entities/user'
import LoginPage from '@/pages/LoginPage'
import { ZustandProvider } from '@/providers/zustand-provider'
import AppLayout from '@/widgets/app-layout'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const myInfo = await UserController.getUser(accessToken)

  return (
    <ZustandProvider myInfo={myInfo}>
      <AppLayout>
        <LoginPage />
      </AppLayout>
    </ZustandProvider>
  )
}
