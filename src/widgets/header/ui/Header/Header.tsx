'use client'

import { BurgerIcon, LogotypeIcon } from '@/shared/icons'
import styles from './Header.module.scss'

import { Button } from '@/shared/ui'
import { useAsideMenu } from '@/widgets/aside'
import { Navigation } from '@/entities/navigation'
import { LoginInfo } from '@/entities/user'

export const Header = () => {
  const { toggle } = useAsideMenu()

  return (
    <header className={styles.header}>
      <div className={styles.logotype}>
        <LogotypeIcon />
        <h1 className={styles.title}>Abelohost Shop</h1>
      </div>
      <Navigation
        direction="row"
        className={styles.navigation}
      />
      <div className={styles.actions}>
        <LoginInfo />
        <Button
          className={styles.menu}
          onClick={toggle}
          variant="icon"
        >
          <BurgerIcon />
        </Button>
      </div>
    </header>
  )
}
