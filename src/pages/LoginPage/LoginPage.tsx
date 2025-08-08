'use client'

import { LoginBody, LoginForm, useLoginStore } from '@/entities/user'
import { UserController } from '@/entities/user'
import { routes } from '@/shared/utils'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { useToast } from '@/shared/model/toast'

const LoginPage = () => {
  const router = useRouter()
  const toast = useToast()
  const setIsLoading = useLoginStore((state) => state.setIsLoading)

  const handleLogin = useCallback(
    async (values: LoginBody) => {
      try {
        setIsLoading(true)
        await UserController.login(values)
        router.push(routes.home)
      } catch {
        toast.error('Ошибка входа', 'Неверные учетные данные')
      }

      setIsLoading(false)
    },
    [setIsLoading, router, toast],
  )

  return <LoginForm onLogin={handleLogin} />
}

export default LoginPage
