import { ReactNode } from 'react'
import styles from './Link.module.scss'
import NextLink from 'next/link'

type LinkProps = {
  children: ReactNode
  href: string
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <NextLink
      className={styles.link}
      href={href}
    >
      {children}
    </NextLink>
  )
}

export default Link
