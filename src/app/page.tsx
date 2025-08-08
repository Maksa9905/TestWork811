import MainPage from '@/pages/MainPage'
import { ZustandProvider } from '@/providers/zustand-provider'
import { UserController } from '@/entities/user'
import { cookies } from 'next/headers'
import AppLayout from '@/widgets/app-layout'
import { ProductsController, mapProductResponse } from '@/entities/products'

export default async function Page() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value

  const myInfo = await UserController.getUser(accessToken)

  const products = await ProductsController.getProducts({
    limit: 12,
    skip: 0,
  })

  return (
    <ZustandProvider
      myInfo={myInfo}
      products={products.products.map(mapProductResponse)}
    >
      <AppLayout>
        <MainPage />
      </AppLayout>
    </ZustandProvider>
  )
}
