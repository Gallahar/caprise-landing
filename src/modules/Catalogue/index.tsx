import { Button, Container } from '@/ui'
import s from './catalogue.module.scss'
import { Heading } from '@/ui/Heading'
import { Slider } from '@/components/Slider'

interface CatalogueProps {
	heading: string
	button: string
}

export const Catalogue = ({ heading, button }: CatalogueProps) => {
	return (
		<section id='catalogue' className={s.catalogueWrapper}>
			<Container className={s.catalogueContainer}>
				<Heading>{heading}</Heading>
				<Slider/>
				<Button variant='primary'>{button}</Button>
			</Container>
		</section>
	)
}
