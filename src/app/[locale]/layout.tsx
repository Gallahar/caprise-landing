import type { Metadata } from 'next'
import { desiraDemo, stolzl } from '@/lib/utils/fonts'
import '@/assets/styles/globals.scss'
import i18nConfig from '../../i18nConfig'
import { CartProvider } from '@/providers/CartProvider'
import ServerIntlProvider from '@/providers/ServerIntlProvider'
import getIntl from './intl'

export const metadata: Metadata = {
	title: 'Caprise',
	description: 'lingerie store',
}

export function generateStaticParams() {
	return i18nConfig.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	const intl = await getIntl(locale)

	return (
		<html lang={locale}>
			<body className={`${stolzl.variable} ${desiraDemo.variable}`}>
				<ServerIntlProvider locale={intl.locale} messages={intl.messages}>
					<CartProvider>{children}</CartProvider>
				</ServerIntlProvider>
			</body>
		</html>
	)
}
