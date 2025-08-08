import styles from './ProductsList.module.scss'
import { Product, ProductCard } from '@/entities/products'

type ProductsListProps = {
  products: Product[]
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <section className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  )
}

export default ProductsList
