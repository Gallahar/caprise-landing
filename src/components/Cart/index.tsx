'use client'

import { IconCart } from '@/assets/icons/IconCart'
import s from './cart.module.scss'
import { useCartContext } from '@/lib/hooks/useCartContext'

export const Cart = () => {
	const { cartItemsCount } = useCartContext()

	return (
		<div className={s.cartWrapper}>
			<button className={s.icon}>
				<IconCart />
			</button>
			{cartItemsCount > 0 && <span className={s.badge}>{cartItemsCount}</span>}
		</div>
	)
}
