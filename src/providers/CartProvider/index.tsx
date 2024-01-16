'use client'

import { ReactNode, createContext, useState } from 'react'
import type { CartContextProps } from './cart-provider-types'
import { cartContextInitialValue } from './cart-provider-data'
import { CartItem } from '@/types/cart-item-interface'

const CartContext = createContext<CartContextProps>(cartContextInitialValue)

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])
	const addProductToCart = (item: CartItem) => {
		setCartItems((items) => [...items, item])
	}

	const removeProductFromCart = (name: string) => {
		setCartItems((items) => items.filter((item) => item.name !== name))
	}

	return (
		<CartContext.Provider
			value={{ cartItems, addProductToCart, removeProductFromCart }}
		>
			{children}
		</CartContext.Provider>
	)
}
