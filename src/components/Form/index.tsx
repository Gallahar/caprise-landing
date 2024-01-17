'use client'

import { Input } from '@/ui/Input'
import s from './form.module.scss'
import { Button } from '@/ui'
import { useIntl } from 'react-intl'

export const Form = () => {
	const { formatMessage } = useIntl()

	return (
		<form onSubmit={(e) => e.preventDefault()} className={s.form}>
			<Input name='name' placeholder={formatMessage({ id: 'delivery.name' })} />
			<Input
				name='email'
				placeholder={formatMessage({ id: 'delivery.email' })}
			/>
			<Button className={s.submitButton} variant='secondary' type='submit'>
				{formatMessage({ id: 'delivery.button' })}
			</Button>
		</form>
	)
}
