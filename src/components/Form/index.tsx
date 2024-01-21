'use client'

import { Input } from '@/ui/Input'
import s from './form.module.scss'
import { Button } from '@/ui'
import { useIntl } from 'react-intl'
import { ChangeEvent, FormEvent, useState } from 'react'
import { subscribeUser } from '@/lib/actions/subscribeActions'
import { Loader } from '@/ui/Loader'
import { Modal } from '../Modal'

export const Form = () => {
	const { formatMessage } = useIntl()
	const [isLoading, setIsLoading] = useState(false)
	const [openModal, setOpenModal] = useState(false)
	const [message, setMessage] = useState('')
	const [formData, setFormData] = useState({ name: '', email: '' })

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
		setFormData((formData) => ({
			...formData,
			[e.target.name]: e.target.value,
		}))

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setMessage('')
		setIsLoading(true)
		const { message } = await subscribeUser(formData)
		setIsLoading(false)
		setMessage(formatMessage({ id: message }))
		setOpenModal(true)
	}

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<Input
				value={formData.name}
				required
				minLength={4}
				onChange={handleChangeInput}
				type='text'
				name='name'
				placeholder={formatMessage({ id: 'delivery.name' })}
			/>
			<Input
				value={formData.email}
				required
				onChange={handleChangeInput}
				type='email'
				name='email'
				placeholder={formatMessage({ id: 'delivery.email' })}
			/>
			<Button
				disabled={isLoading}
				className={s.submitButton}
				variant='secondary'
				type='submit'
			>
				{isLoading ? (
					<>
						{'loading...'}
						<Loader />
					</>
				) : (
					formatMessage({ id: 'delivery.button' })
				)}
			</Button>
			{openModal && (
				<Modal autoclose={true} closeHandler={() => setOpenModal(false)}>
					{message}
				</Modal>
			)}
		</form>
	)
}
