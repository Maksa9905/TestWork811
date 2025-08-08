import { create } from 'zustand'
import { Toast, ToastStore } from './types'

export const useToastStore = create<ToastStore>((set, get) => ({
  toasts: [],

  addToast: (toastData) => {
    const id = Math.random().toString(36).substr(2, 9)
    const duration = toastData.duration ?? 5000

    const newToast: Toast = {
      ...toastData,
      id,
      isVisible: true,
    }

    set((state) => ({
      toasts: [...state.toasts, newToast],
    }))

    if (duration > 0) {
      setTimeout(() => {
        get().hideToast(id)
      }, duration)

      setTimeout(() => {
        get().removeToast(id)
      }, duration + 300)
    }
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }))
  },

  hideToast: (id) => {
    set((state) => ({
      toasts: state.toasts.map((toast) =>
        toast.id === id ? { ...toast, isVisible: false } : toast,
      ),
    }))
  },

  clearAllToasts: () => {
    set({ toasts: [] })
  },
}))
