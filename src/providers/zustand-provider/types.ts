import { UseBoundStore } from 'zustand'
import { StoreApi } from 'zustand'
import { MyInfoStore } from '@/entities/user/model/types'
import { ProductsStore } from '@/entities/products'

export type ZustandContextType = {
  myInfo: UseBoundStore<StoreApi<MyInfoStore>> | null
  products: UseBoundStore<StoreApi<ProductsStore>> | null
}

export const defaultZustandContext: ZustandContextType = {
  myInfo: null,
  products: null,
}
