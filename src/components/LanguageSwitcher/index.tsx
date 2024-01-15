'use client'

import s from './language-switcher.module.scss'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useCurrentLocale } from 'next-i18n-router/client'
import { i18nConfig } from '../../../i18nConfig'
import { ChangeEvent } from 'react'

export default function LanguageSwitcher() {
	const router = useRouter()
	const currentPathname = usePathname()
	const currentLocale = useCurrentLocale(i18nConfig)

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value
		const days = 30
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		const expires = '; expires=' + date.toUTCString()
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		) {
			router.push('/' + newLocale + currentPathname)
		} else {
			router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
		}

		router.refresh()
	}

	return (
		<select onChange={handleChange} value={currentLocale}>
			<option value='en'>en</option>
			<option value='ru'>ru</option>
		</select>
	)
}