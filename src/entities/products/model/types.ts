import { QueryState } from '@/shared/api'

export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  rating: number
  image: string
}

export type ProductsStore = QueryState<Product[]>
