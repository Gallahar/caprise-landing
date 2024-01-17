import { Container } from '@/ui'
import deliveryBg from '@/assets/images/delivery/delivery_bg.webp'
import s from './delivery.module.scss'
import Image from 'next/image'
import { Form } from '@/components/Form'
import { Heading } from '@/ui/Heading'

export const Delivery = ({ heading }: { heading: string }) => {
	return (
		<section className={s.deliveryWrapper} id='delivery'>
			<Container className={s.deliveryContainer}>
				<div className={s.left}>
					<Heading>{heading}</Heading>
					<Form />
				</div>
				<Image className={s.image} src={deliveryBg} alt='delivery_bg' />
			</Container>
		</section>
	)
}
