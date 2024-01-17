import { CartContext } from '@/providers/CartProvider'
import { useContext } from 'react'

export const useCartContext = () => {
	const cartContext = useContext(CartContext)

	return cartContext
}
