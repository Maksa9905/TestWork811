'use client'

import { useToastStore } from '@/shared/model/toast'
import ToastItem from './ToastItem'
import styles from './ToastAlert.module.scss'

const ToastAlert = () => {
  const { toasts } = useToastStore()

  if (toasts.length === 0) {
    return null
  }

  return (
    <div className={styles.container}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
        />
      ))}
    </div>
  )
}

export default ToastAlert
