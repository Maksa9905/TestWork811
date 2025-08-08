import { LoginStore } from './types'

export const validateLoginForm = (values: LoginStore) => {
  const errors: Partial<LoginStore> = {}

  if (values.username.length < 3) {
    errors.username = 'Username is required'
  }

  if (values.password.length < 3) {
    errors.password = 'Password is required'
  }

  return errors
}
