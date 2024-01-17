'use client'

import { useIntl } from 'react-intl'
import s from './slider.module.scss'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { productsEn, productsRu } from '@/config/data/catalogueData'
import { ProductCard } from '../ProductCard'
import { Autoplay } from 'swiper/modules'

export const Slider = () => {
	const { locale } = useIntl()

	const products = locale === 'en' ? productsEn : productsRu

	return (
		<Swiper
			modules={[Autoplay]}
			loop={true}
			autoplay={{
				delay: 1000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			speed={2500}
			className={s.slider}
			spaceBetween={60}
			slidesPerView={4}
		>
			{products.map((product) => (
				<SwiperSlide key={product.name}>
					<ProductCard {...product} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
