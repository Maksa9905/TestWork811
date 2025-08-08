import { Product } from './types'
import { ProductResponse } from '../api/types'

export const mapProductResponse = (response: ProductResponse): Product => ({
  id: response.id || 0,
  title: response.title || '',
  description: response.description || '',
  category: response.category || '',
  price: response.price || 0,
  image: response.images[0] || '',
  rating: response.rating || 0,
})
