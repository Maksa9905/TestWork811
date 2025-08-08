import { useCallback } from 'react'
import { useToastStore } from './model'
import { ToastType } from './types'

export const useToast = () => {
  const { addToast, removeToast, hideToast, clearAllToasts } = useToastStore()

  const showToast = useCallback(
    (type: ToastType, title: string, message?: string, duration?: number) => {
      addToast({ type, title, message, duration })
    },
    [addToast],
  )

  const success = useCallback(
    (title: string, message?: string, duration?: number) => {
      showToast('success', title, message, duration)
    },
    [showToast],
  )

  const error = useCallback(
    (title: string, message?: string, duration?: number) => {
      showToast('error', title, message, duration)
    },
    [showToast],
  )

  const warning = useCallback(
    (title: string, message?: string, duration?: number) => {
      showToast('warning', title, message, duration)
    },
    [showToast],
  )

  const info = useCallback(
    (title: string, message?: string, duration?: number) => {
      showToast('info', title, message, duration)
    },
    [showToast],
  )

  return {
    showToast,
    success,
    error,
    warning,
    info,
    removeToast,
    hideToast,
    clearAllToasts,
  }
}
