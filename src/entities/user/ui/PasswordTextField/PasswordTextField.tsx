import { TextField } from '@/shared/ui'
import { useLoginStore } from '@/entities/user'

const PasswordTextField = () => {
  const { password, setPassword } = useLoginStore()

  return (
    <TextField
      label="Password"
      fullwidth
      value={password}
      onChange={setPassword}
      type="password"
    />
  )
}

export default PasswordTextField
