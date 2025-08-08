'use client'

import { cn } from '@/shared/utils/classes'
import styles from './TextField.module.scss'

type TextFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'password'
  fullwidth?: boolean
  className?: string
}

const TextField = ({
  label,
  value,
  onChange,
  type = 'text',
  fullwidth = false,
  className,
}: TextFieldProps) => {
  const classNames = cn(
    styles.textfield,
    fullwidth ? styles.fullwidth : '',
    className,
  )

  return (
    <div className={classNames}>
      <label
        htmlFor={label}
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={label}
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      />
    </div>
  )
}

export default TextField
