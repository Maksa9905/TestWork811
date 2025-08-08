'use client'

import { cn } from '@/shared/utils'
import { useAsideMenu } from '@/widgets/aside'
import styles from './AsideMenu.module.scss'
import { Navigation } from '@/entities/navigation'
import { CrossIcon, LogotypeIcon } from '@/shared/icons'
import { Button } from '@/shared/ui'

const AsideMenu = () => {
  const { isOpen, toggle } = useAsideMenu()

  const asideClasses = cn(styles.aside, isOpen ? styles.opened : styles.closed)

  return (
    <aside className={asideClasses}>
      <LogotypeIcon />
      <Button
        variant="icon"
        className={styles.close}
        onClick={toggle}
      >
        <CrossIcon />
      </Button>
      <Navigation
        onLinkClick={toggle}
        direction="column"
      />
    </aside>
  )
}

export default AsideMenu
