import type { CartItem } from '@/types/cart-item-interface'

export interface CartContextProps {
	cartItems: CartItem[]
	addProductToCart: (item: CartItem) => void
	removeProductFromCart: (name: string) => void
}
