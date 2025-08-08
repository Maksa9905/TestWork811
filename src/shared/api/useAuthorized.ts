'use client'

import { useEffect, useState } from 'react'
import { CookiesController } from '../utils'

export const useAuthorized = () => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) return false

  const isAuthorized = CookiesController.getCookie('isAuthorized') === 'true'

  return isAuthorized
}
