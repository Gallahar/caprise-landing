'use client'

import { Container, CustomLink, Logo } from '@/ui'
import s from './header.module.scss'
import { Cart } from '../Cart'
import LanguageSwitcher from '../LanguageSwitcher'
import { LinksEn, LinksRu } from '@/config/data/headerData'
import { useIntl } from 'react-intl'
import { useScroll } from './useScroll'

export const Header = () => {
	const { active } = useScroll()

	const { locale } = useIntl()
	const links = locale === 'en' ? LinksEn : LinksRu

	return (
		<header data-active={active} className={s.headerWrapper}>
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
