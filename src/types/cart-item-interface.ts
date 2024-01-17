import { StaticImageData } from 'next/image'

export interface CartItem {
	name: string
	price?: string
	imgSrc?: StaticImageData
	count?: number
}
