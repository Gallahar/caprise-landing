import ServerIntlProvider from '@/components/ServerIntlProvider'
import getIntl from './intl'
import { Header } from '@/components/Header'
import { Hero } from '@/modules/Hero'

export default async function Main({
	params: { locale },
}: {
	params: { locale: string }
}) {
	const intl = await getIntl(locale)

	return (
		<ServerIntlProvider locale={intl.locale} messages={intl.messages}>
			<Header />
			<Hero
				title={intl.formatMessage({ id: 'hero.title' })}
				speech={intl.formatMessage({ id: 'hero.speech' })}
				button={intl.formatMessage({ id: 'hero.button' })}
			/>
		</ServerIntlProvider>
	)
}
