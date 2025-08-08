import { ApiController } from '@/shared/api'
import { GetProductsParams, ProductsApiResponse } from './types'

export class ProductsController {
  static async getProducts(params: GetProductsParams) {
    return await ApiController.call<ProductsApiResponse>('products', {
      method: 'GET',
      params,
    })
  }
}
