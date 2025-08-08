import { TextField } from '@/shared/ui'
import { useLoginStore } from '@/entities/user'

const UsernameTextField = () => {
  const { setUsername, username } = useLoginStore()

  return (
    <TextField
      label="Username"
      value={username}
      fullwidth
      onChange={setUsername}
    />
  )
}

export default UsernameTextField
