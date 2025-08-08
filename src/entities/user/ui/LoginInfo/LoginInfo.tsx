'use client'

import { Button } from '@/shared/ui'
import styles from './LoginInfo.module.scss'
import { LogoutIcon } from '@/shared/icons'
import { UserController } from '@/entities/user'
import { useCallback } from 'react'
import { routes } from '@/shared/utils'
import { useRouter } from 'next/navigation'
import { useMyInfo } from '@/providers/zustand-provider'

const LoginInfo = () => {
  const router = useRouter()
  const myInfo = useMyInfo((state) => state.data)

  const handleLogout = useCallback(async () => {
    await UserController.logout()
  }, [])

  const handleLoginButtonClick = useCallback(() => {
    router.push(routes.login)
  }, [router])

  if (myInfo) {
    return (
      <div className={styles.container}>
        <Button
          variant="icon"
          onClick={handleLogout}
        >
          <span>
            {myInfo.firstName} {myInfo.lastName}
          </span>
          <LogoutIcon />
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleLoginButtonClick}
      variant="contained"
    >
      Login
    </Button>
  )
}

export default LoginInfo
