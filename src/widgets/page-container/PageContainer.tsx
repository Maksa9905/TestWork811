import { ReactNode } from 'react'
import styles from './PageContainer.module.scss'

type PageContainerProps = {
  children: ReactNode
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <main className={styles.container}>{children}</main>
}

export default PageContainer
