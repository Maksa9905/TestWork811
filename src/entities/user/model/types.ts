import { QueryState } from '@/shared/api'

export type LoginStore = {
  username: string
  password: string
  isLoading: boolean
  setUsername: (username: string) => void
  setPassword: (password: string) => void
  setIsLoading: (isLoading: boolean) => void
}

export type User = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}

export type MyInfoStore = QueryState<User>
