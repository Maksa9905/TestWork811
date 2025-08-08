export type ToastType = 'success' | 'error' | 'warning' | 'info'

export type Toast = {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
  isVisible: boolean
}

export type ToastStore = {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id' | 'isVisible'>) => void
  removeToast: (id: string) => void
  hideToast: (id: string) => void
  clearAllToasts: () => void
}
