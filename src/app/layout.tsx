import type { Metadata } from 'next'
import { ReactNode } from 'react'

import './global.scss'
import './variables.scss'

export const metadata: Metadata = {
  title: 'Abelohost Shop',
  description: 'Abelohost Shop',
  icons: { icon: '/logo.svg' },
}

type RootLayoutProps = {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return children
}
