'use client'

import { useSearchParams } from 'next/navigation'
import s from './unsubscribe.module.scss'
import { useEffect, useState } from 'react'
import { unsubscribeUser } from '@/lib/actions/subscribeActions'
import { useIntl } from 'react-intl'

function UnSubscribePage() {
	const [message, setMessage] = useState('')
	const email = useSearchParams().get('email')
	const { formatMessage } = useIntl()

	useEffect(() => {
		const handleUnsubscribe = async () => {
			if (!email) return
			const { message } = await unsubscribeUser(email)
			setMessage(message)
		}
		handleUnsubscribe()
	}, [email])

	return (
		<section className={s.pageWrapper}>
			{message && (
				<h1 className={s.message}>{formatMessage({ id: message })}</h1>
			)}
		</section>
	)
}

export default UnSubscribePage
