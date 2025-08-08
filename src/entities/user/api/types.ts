export type LoginBody = {
  username: string
  password: string
}

export type LoginResponse = {
  accessToken: string
  refreshToken: string
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}
