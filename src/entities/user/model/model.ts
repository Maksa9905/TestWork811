import { create } from 'zustand'
import { LoginStore, MyInfoStore, User } from './types'

export const useLoginStore = create<LoginStore>((set) => ({
  username: '',
  password: '',
  isLoading: false,
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setIsLoading: (isLoading) => set({ isLoading }),
}))

export const initializeMyInfoStore = (defaultData: User | null) => {
  return create<MyInfoStore>((set) => ({
    data: defaultData,
    isLoading: false,
    error: null,
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    setData: (data) => set({ data }),
  }))
}
