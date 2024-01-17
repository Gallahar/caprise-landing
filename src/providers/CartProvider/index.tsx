'use client'

import { ReactNode, createContext, useState } from 'react'
import type { CartContextProps } from './cart-provider-types'
import { cartContextInitialValue } from './cart-provider-data'
import { CartItem } from '@/types/cart-item-interface'

export const CartContext = createContext<CartContextProps>(
	cartContextInitialValue
)

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])
	const addProductToCart = (newItem: CartItem) => {
		setCartItems((items) => {
			if (items.find((item) => item.name === newItem.name)) {
				return items.map((item) =>
					item.name === newItem.name
						? { ...item, count: item.count ? (item.count += 1) : 1 }
						: item
				)
			} else {
				return [...items, newItem]
			}
		})
	}

	const cartItemsCount = cartItems.reduce((a, c) => a + (c.count || 1), 0)

	const removeProductFromCart = (name: string) => {
		setCartItems((items) => items.filter((item) => item.name !== name))
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				cartItemsCount,
				addProductToCart,
				removeProductFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
