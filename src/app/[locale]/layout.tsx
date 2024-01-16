import type { Metadata } from 'next'
import { desiraDemo, stolzl } from '@/lib/utils/fonts'
import '@/assets/styles/globals.scss'
import i18nConfig from '../../i18nConfig'
import { CartProvider } from '@/providers/CartProvider'

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
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	)
}
