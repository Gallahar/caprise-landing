import type { Metadata } from 'next'
import { desiraDemo, stolzl } from '@/lib/utils/fonts'
import './globals.css'
import { i18nConfig } from '../../../i18nConfig'

export const metadata: Metadata = {
	title: 'Caprise',
	description: 'lingerie store',
}

export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }))
}

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	return (
		<html lang={locale}>
			<body className={`${stolzl.variable} ${desiraDemo.variable}`}>
				{children}
			</body>
		</html>
	)
}
