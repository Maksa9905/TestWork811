import { create } from 'zustand'
import { Product, ProductsStore } from './types'

export const initializeProductsStore = (defaultData: Product[]) => {
  return create<ProductsStore>((set) => ({
    data: defaultData,
    isLoading: false,
    error: null,
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    setData: (data) => set({ data }),
  }))
}
