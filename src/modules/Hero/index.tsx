import { Button, Container } from '@/ui'
import s from './hero.module.scss'
import Link from 'next/link'

interface HeroProps {
	title: string
	speech: string
	button: string
}

export const Hero = ({ title, speech, button }: HeroProps) => {
	return (
		<section>
			<Container className={s.heroWrapper}>
				<h1 className={s.heading}>Caprise</h1>
				<h3 className={s.title}>{title}</h3>
				<p className={s.speech}>{speech}</p>
				<Link className={s.button} href={'#catalogue'}>
					<Button variant='primary'>{button}</Button>
				</Link>
			</Container>
		</section>
	)
}
