import { ReactNode } from 'react'
import styles from './Button.module.scss'
import { cn } from '@/shared/utils'
import { LoaderIcon } from '@/shared/icons'

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  variant?: 'contained' | 'outlined' | 'icon'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  isLoading?: boolean
}

const Button = ({
  children,
  variant = 'outlined',
  disabled = false,
  type = 'button',
  className,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const buttonClasses = cn(styles.button, styles[variant], className)

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <LoaderIcon /> : children}
    </button>
  )
}

export default Button
