'use client'
import { LinksRu, LinksEn } from '@/config/data/headerData'
import { useIntl } from 'react-intl'

export const useLocalizedLinks = () => {
	const { locale } = useIntl()

	const localizedLinks = locale === 'ru' ? LinksRu : LinksEn

	return { localizedLinks }
}
