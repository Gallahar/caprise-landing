'use client'

import { useIntl } from 'react-intl'
import s from './slider.module.scss'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { productsEn, productsRu } from '@/config/data/catalogueData'
import { ProductCard } from '../ProductCard'
import { Autoplay } from 'swiper/modules'
import { breakPoints } from '@/config/sliderBreakpoints'

export const Slider = () => {
	const { locale } = useIntl()

	const products = locale === 'en' ? productsEn : productsRu

	return (
		<Swiper
			resizeObserver={true}
			modules={[Autoplay]}
			loop={true}
			autoplay={{
				delay: 1000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			speed={2500}
			className={s.slider}
			breakpoints={breakPoints}
		>
			<div>
				{products.map((product) => (
					<SwiperSlide key={product.name}>
						<ProductCard {...product} />
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	)
}
