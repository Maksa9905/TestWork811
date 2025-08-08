import { createContext } from 'react'
import { MyInfoStore } from '../model/types'

export const MyInfoContext = createContext<MyInfoStore | null>(null)
