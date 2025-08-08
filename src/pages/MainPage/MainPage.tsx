'use client'

import { ProductsList } from '@/entities/products'
import { useProducts } from '@/providers/zustand-provider'

const MainPage = () => {
  const products = useProducts((state) => state.data || [])

  return (
    <>
      <ProductsList products={products} />
    </>
  )
}

export default MainPage
