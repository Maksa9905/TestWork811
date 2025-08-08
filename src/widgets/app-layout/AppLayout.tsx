import { ReactNode } from 'react'
import styles from './AppLayout.module.scss'
import { Header } from '@/widgets/header'
import Footer from '@/widgets/footer'
import { Montserrat } from 'next/font/google'
import PageContainer from '../page-container'
import { cn } from '@/shared/utils/classes'
import { AsideMenu } from '../aside'
import { ToastAlert } from '../toast-alert'

type AppLayoutProps = {
  children: ReactNode
  withHeader?: boolean
  withFooter?: boolean
  withAside?: boolean
}

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

const AppLayout = ({
  children,
  withHeader = true,
  withFooter = true,
  withAside = true,
}: AppLayoutProps) => {
  const classNames = cn(
    styles.body,
    montserrat.className,
    withFooter ? styles.withFooter : styles.withoutFooter,
  )

  return (
    <html
      className={styles.html}
      lang="en"
    >
      <body className={classNames}>
        {withHeader && <Header />}
        <PageContainer>{children}</PageContainer>
        {withAside && <AsideMenu />}
        {withFooter && <Footer />}
        <ToastAlert />
      </body>
    </html>
  )
}

export default AppLayout
