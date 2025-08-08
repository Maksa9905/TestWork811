export const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  shops: '/shops',
  cart: '/cart',
  product: (id: number) => `/products/${id}`,
  login: '/login',
}
