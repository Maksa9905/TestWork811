import { Product } from '@/entities/products'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { Button, Link } from '@/shared/ui'
import { routes } from '@/shared/utils/routes'
import { AddToCartIcon } from '@/shared/icons'
import { useMyInfo } from '@/providers/zustand-provider'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const myInfo = useMyInfo((state) => state.data)

  return (
    <article className={styles.product}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          <Link href={routes.product(product.id)}>{product.title}</Link>
        </h3>
      </header>
      <Image
        src={product.image}
        className={styles.image}
        width={100}
        height={100}
        alt={`${product.title} image`}
      />
      <section className={styles.description}>
        <p className={styles.text}>{product.description}</p>
      </section>
      <footer className={styles.footer}>
        <p className={styles.price}>{product.price} ₽</p>
        {myInfo && (
          <Button variant="icon">
            <span className={styles.buttonText}>Add to cart</span>
            <AddToCartIcon />
          </Button>
        )}
      </footer>
    </article>
  )
}

export default ProductCard
