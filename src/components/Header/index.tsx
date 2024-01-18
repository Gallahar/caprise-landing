'use client'

import { Container, CustomLink, Logo } from '@/ui'
import s from './header.module.scss'
import { Cart } from '../Cart'
import LanguageSwitcher from '../LanguageSwitcher'
import { useScroll } from './useScroll'
import { useLocalizedLinks } from '@/lib/hooks/useLocalizedLinks'
import { IconBurger } from '@/assets/icons/IconBurger'
import { useState } from 'react'
import { MobileMenu } from '../MobileMenu'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { active, isScrolled } = useScroll()
	const { localizedLinks } = useLocalizedLinks()

	return (
		<div>
			<header
				data-scrolled={isScrolled}
				data-active={active}
				className={s.headerWrapper}
			>
				<Container className={s.header}>
					<Logo className={s.logo} />
					<nav className={s.nav}>
						{localizedLinks.map(({ title, href }) => (
							<CustomLink key={title} href={href}>
								{title}
							</CustomLink>
						))}
					</nav>
					<div className={s.actionsWrapper}>
						<LanguageSwitcher />
						<Cart />
					</div>
					<button
						onClick={() => setIsMenuOpen(true)}
						className={s.burgerButton}
					>
						<IconBurger />
					</button>
				</Container>
			</header>
			{isMenuOpen && (
				<MobileMenu closeMenuHandler={() => setIsMenuOpen(false)} />
			)}
		</div>
	)
}
