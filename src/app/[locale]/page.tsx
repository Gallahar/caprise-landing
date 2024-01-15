import ServerIntlProvider from '@/components/ServerIntlProvider'
import getIntl from './intl'

export default async function Main({
	params: { locale },
}: {
	params: { locale: string }
}) {
	const intl = await getIntl(locale)

	return (
		<ServerIntlProvider locale={intl.locale} messages={intl.messages}>
			<main>HELLO</main>
		</ServerIntlProvider>
	)
}
