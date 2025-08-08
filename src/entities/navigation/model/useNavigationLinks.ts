import { useMemo } from 'react'

export const useNavigationLinks = () => {
  const links = useMemo(
    () => [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
      {
        label: 'Shops',
        href: '/shops',
      },
      {
        label: 'Cart',
        href: '/cart',
      },
    ],
    [],
  )

  return links
}
