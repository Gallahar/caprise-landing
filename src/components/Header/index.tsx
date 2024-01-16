'use client'

import { Container, CustomLink, Logo } from '@/ui'
import s from './header.module.scss'
import { Cart } from '../Cart'
import LanguageSwitcher from '../LanguageSwitcher'
import { LinksEn, LinksRu } from '@/lib/data/headerData'
import { useIntl } from 'react-intl'

export const Header = () => {
	const { locale } = useIntl()
	const links = locale === 'en' ? LinksEn : LinksRu

	return (
		<header className={s.headerWrapper}>
			<Container className={s.header}>
				<Logo className={s.logo} />
				<nav className={s.nav}>
					{links.map(({ title, href }) => (
						<CustomLink key={title} href={href}>
							{title}
						</CustomLink>
					))}
				</nav>
				<div className={s.actionsWrapper}>
					<LanguageSwitcher />
					<Cart />
				</div>
			</Container>
		</header>
	)
}
