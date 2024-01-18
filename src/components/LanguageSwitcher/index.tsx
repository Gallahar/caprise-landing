'use client'

import s from './language-switcher.module.scss'
import { useRouter, usePathname  } from 'next/navigation'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '../../i18nConfig'

const locales = ['en', 'ru']

export default function LanguageSwitcher() {
	const router = useRouter()
	const currentPathname = usePathname()
	const currentLocale = useCurrentLocale(i18nConfig)

	const handleChange = (newLocale: string) => {
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
		<div className={s.localesWrapper}>
			{locales.map((locale) => (
				<button
					key={locale}
					onClick={() => handleChange(locale)}
					className={s.locale}
					data-active={currentLocale === locale}
				>
					{locale}
				</button>
			))}
		</div>
	)
}
