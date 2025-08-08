'use client'

import { Toast } from '@/shared/model/toast'
import { useToastStore } from '@/shared/model/toast'
import { cn } from '@/shared/utils'
import styles from './ToastAlert.module.scss'

type ToastItemProps = {
  toast: Toast
}

const ToastItem = ({ toast }: ToastItemProps) => {
  const { removeToast, hideToast } = useToastStore()

  const handleClose = () => {
    hideToast(toast.id)
    setTimeout(() => {
      removeToast(toast.id)
    }, 300)
  }

  const toastClasses = cn(
    styles.toast,
    styles[toast.type],
    !toast.isVisible ? styles.hidden : undefined,
  )

  return (
    <div className={toastClasses}>
      <div className={styles.content}>
        <div className={styles.title}>{toast.title}</div>
        {toast.message && <div className={styles.message}>{toast.message}</div>}
      </div>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Закрыть уведомление"
      >
        ×
      </button>
    </div>
  )
}

export default ToastItem
