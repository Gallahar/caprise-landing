'use client'
import Image, { StaticImageData } from 'next/image'
import s from './product-card.module.scss'
import { IconArrow } from '@/assets/icons/IconArrow'
import { useCartContext } from '@/lib/hooks/useCartContext'

interface ProductCardProps {
	name: string
	price: string
	imgSrc: StaticImageData
}

export const ProductCard = ({ imgSrc, name, price }: ProductCardProps) => {
	const { addProductToCart } = useCartContext()

	return (
		<div
			className={s.card}
			onClick={() => addProductToCart({ name, imgSrc, price })}
		>
			<Image className={s.cardImg} alt={`product-${name}`} src={imgSrc} />
			<div className={s.cardInfo}>
				<h4 className={s.cardName}>{name}</h4>
				<div className={s.infoContainer}>
					<span className={s.price}>{price}</span>
					<IconArrow />
				</div>
			</div>
		</div>
	)
}
