'use client'

import { initializeMyInfoStore } from '@/entities/user/model/model'
import { MyInfoStore, User } from '@/entities/user/model/types'
import { createContext, ReactNode, useContext, useRef } from 'react'
import { defaultZustandContext, ZustandContextType } from './types'
import { StoreApi, useStore } from 'zustand'
import { UseBoundStore } from 'zustand'
import {
  initializeProductsStore,
  Product,
  ProductsStore,
} from '@/entities/products'

type ZustandProviderProps = {
  children: ReactNode
  myInfo?: User
  products?: Product[]
}

const ZustandContext = createContext<ZustandContextType>(defaultZustandContext)

export const ZustandProvider = ({
  children,
  myInfo,
  products,
}: ZustandProviderProps) => {
  const myInfoStore = useRef<UseBoundStore<StoreApi<MyInfoStore>> | null>(null)
  const productsStore = useRef<UseBoundStore<StoreApi<ProductsStore>> | null>(
    null,
  )

  if (myInfoStore.current === null) {
    myInfoStore.current = initializeMyInfoStore(myInfo || null)
  }

  if (productsStore.current === null) {
    productsStore.current = initializeProductsStore(products || [])
  }

  return (
    <ZustandContext.Provider
      value={{
        myInfo: myInfoStore.current,
        products: productsStore.current,
      }}
    >
      {children}
    </ZustandContext.Provider>
  )
}

export const useMyInfo = <T,>(selector: (store: MyInfoStore) => T) => {
  const myInfoStore = useContext(ZustandContext).myInfo

  if (!myInfoStore)
    throw new Error('MyInfoStore must be used within ZustandProvider')

  return useStore(myInfoStore, selector)
}

export const useProducts = <T,>(selector: (store: ProductsStore) => T) => {
  const productsStore = useContext(ZustandContext).products

  if (!productsStore)
    throw new Error('ProductsStore must be used within ZustandProvider')

  return useStore(productsStore, selector)
}
