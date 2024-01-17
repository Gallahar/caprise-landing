import ServerIntlProvider from '@/components/ServerIntlProvider'
import getIntl from './intl'
import { Header } from '@/components/Header'
import { Hero } from '@/modules/Hero'
import { Catalogue } from '@/modules/Catalogue'
import { Delivery } from '@/modules/Delivery'
import { Contacts } from '@/modules/Contacts'
import { Footer } from '@/components/Footer'

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
			<Catalogue
				button={intl.formatMessage({ id: 'catalogue.button' })}
				heading={intl.formatMessage({ id: 'catalogue.heading' })}
			/>
			<Delivery heading={intl.formatMessage({ id: 'delivery.heading' })} />
			<Contacts
				heading={intl.formatMessage({ id: 'contacts.heading' })}
				option1={intl.formatMessage({ id: 'contacts.option1' })}
				option2={intl.formatMessage({ id: 'contacts.option2' })}
				option3={intl.formatMessage({ id: 'contacts.option3' })}
			/>
			<Footer />
		</ServerIntlProvider>
	)
}
