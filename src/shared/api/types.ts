export type ApiWithPaginationResponse<T> = T & {
  total: number
  skip: number
  limit: number
}

export type QueryState<T> = {
  data: T | null
  isLoading: boolean
  error: string | null
  setIsLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  setData: (data: T | null) => void
}
