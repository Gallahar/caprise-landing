'use client'

import { IconCart } from '@/assets/icons/IconCart'
import s from './cart.module.scss'

export const Cart = () => {
	const products = false

	return (
		<div className={s.cartWrapper}>
			<IconCart />
			{products && <span className={s.badge}></span>}
		</div>
	)
}

//todo: add cart display functional, mb add popup with cartItems onClick.
