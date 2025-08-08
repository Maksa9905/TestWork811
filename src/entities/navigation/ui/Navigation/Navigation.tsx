import styles from './Navigation.module.scss'

import { Link } from '@/shared/ui'
import { useNavigationLinks } from '@/entities/navigation'
import { cn } from '@/shared/utils'

type NavigationProps = {
  className?: string
  direction?: 'row' | 'column'
  onLinkClick?: (href?: string) => void
}

export const Navigation = ({
  className,
  direction = 'row',
  onLinkClick,
}: NavigationProps) => {
  const links = useNavigationLinks()

  const navigationClasses = cn(styles.navigation, styles[direction], className)

  return (
    <nav className={className}>
      <ul className={navigationClasses}>
        {links.map((link) => (
          <li
            key={link.href}
            onClick={() => onLinkClick?.(link.href)}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
