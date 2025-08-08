'use client'

import { useMemo } from 'react'
import styles from './Footer.module.scss'
import { useMyInfo } from '@/providers/zustand-provider'

const Footer = () => {
  const myInfo = useMyInfo((state) => state.data)

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className={styles.footer}>
      <p>{currentYear}</p>
      {myInfo && (
        <p>
          Logged as <span className={styles.user}>{myInfo?.email}</span>
        </p>
      )}
    </footer>
  )
}

export default Footer
