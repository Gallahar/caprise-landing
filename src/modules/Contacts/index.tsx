import { Button, Container } from '@/ui'
import s from './contacts.module.scss'
import { Heading } from '@/ui/Heading'

interface ContactsProps {
	heading: string
	option1: string
	option2: string
	option3: string
}

export const Contacts = ({
	heading,
	option1,
	option2,
	option3,
}: ContactsProps) => {
	return (
		<section className={s.contactsWrapper} id='contacts'>
			<Container className={s.contactsContainer}>
				<Heading>{heading}</Heading>
				<div className={s.optionWrapper}>
					<p>{option1}</p>
					<Button variant='primary'>050 555 55 55</Button>
				</div>
				<div className={s.optionWrapper}>
					<p>{option2}</p>
					<Button variant='secondary'>050 554 44 32</Button>
				</div>
				<div className={s.optionWrapper}>
					<p>{option3}</p>
					<Button variant='secondary'>060 334 22 11</Button>
				</div>
			</Container>
		</section>
	)
}
