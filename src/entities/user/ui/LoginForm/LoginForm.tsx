'use client'

import { Button } from '@/shared/ui'
import styles from './LoginForm.module.scss'
import {
  UsernameTextField,
  PasswordTextField,
  useLoginStore,
  validateLoginForm,
} from '@/entities/user'
import { LoginBody } from '@/entities/user'
import { useCallback } from 'react'
import { useToast } from '@/shared/model/toast'

type LoginFormProps = {
  onLogin: (values: LoginBody) => void
}

const LoginForm = (props: LoginFormProps) => {
  const { onLogin } = props

  const toast = useToast()

  const isLoading = useLoginStore((state) => state.isLoading)

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const errors = validateLoginForm(useLoginStore.getState())
      if (Object.keys(errors).length > 0) {
        toast.error(
          'Невалидные данные',
          'username и password должны быть больше 3 символов',
        )
        return
      }

      onLogin(useLoginStore.getState())
    },
    [onLogin, toast],
  )

  return (
    <div className={styles.logincontainer}>
      <form
        className={styles.loginform}
        onSubmit={handleSubmit}
      >
        <div className={styles.formfields}>
          <UsernameTextField />
          <PasswordTextField />
        </div>
        <div className={styles.actions}>
          <Button
            type="submit"
            variant="contained"
            isLoading={isLoading}
          >
            Login
          </Button>
          <Button variant="icon">Sign up</Button>
        </div>
      </form>
      <div className={styles.logininfo}>
        <h2 className={styles.logintitle}>
          <span className={styles.greeting}>Welcome to the </span> Abelohost
          Shop
        </h2>
        <p className={styles.logindescription}>
          The best place for female beauty
        </p>
      </div>
    </div>
  )
}

export default LoginForm
