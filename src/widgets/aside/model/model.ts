import { create } from 'zustand'
import { AsideMenuState } from './types'

export const useAsideMenu = create<AsideMenuState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
