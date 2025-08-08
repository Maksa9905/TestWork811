import { ApiController } from '@/shared/api'
import { LoginBody, LoginResponse } from './types'

export class UserController {
  static async login(body: LoginBody) {
    const response = await ApiController.call<LoginResponse>('auth/login', {
      method: 'POST',
      data: body,
    })

    return response
  }

  static async logout() {
    try {
      await ApiController.call('auth/logout', {
        method: 'POST',
      })
    } catch (error) {
      console.error('UserController: Ошибка серверного logout:', error)
    }
  }

  static async getUser(accessToken?: string) {
    if (!accessToken) return

    const response = await ApiController.call<LoginResponse>('auth/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    return response
  }

  static async refreshToken(accessToken: string, refreshToken: string) {
    const response = await ApiController.call<LoginResponse>('auth/refresh', {
      method: 'POST',
      data: { accessToken, refreshToken },
    })
    return response
  }
}
