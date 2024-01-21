'use client'

import { Logo } from '@/ui'
import s from './mobile-menu.module.scss'
import { Cart } from '../Cart'
import { IconCross } from '@/assets/icons/IconCross'
import { useLocalizedLinks } from '@/lib/hooks/useLocalizedLinks'
import { useRouter } from 'next/navigation'
import LanguageSwitcher from '../LanguageSwitcher'
import { useState } from 'react'
import { useOverflow } from '@/lib/hooks/useOverflow'

interface MobileMenuProps {
	closeMenuHandler: () => void
}

export const MobileMenu = ({ closeMenuHandler }: MobileMenuProps) => {
	useOverflow()
	const [shouldClose, setShouldClose] = useState(false)
	const { localizedLinks } = useLocalizedLinks()
	const { push } = useRouter()

	const handleClickLink = (href: string) => {
		setShouldClose(true)
		if (href !== '#main') {
			push(href)
		} else [window.scrollTo(0, 0)]

		setTimeout(() => {
			closeMenuHandler()
		}, 300)
	}

	return (
		<div data-should-close={shouldClose} className={s.mobileWrapper}>
			<div className={s.firstLine}>
				<Logo />
				<div className={s.controlsWrapper}>
					<Cart />
					<button
						onClick={() => {
							setShouldClose(true)
							setTimeout(() => {
								closeMenuHandler()
							}, 300)
						}}
					>
						<IconCross />
					</button>
				</div>
			</div>
			<nav className={s.links}>
				{localizedLinks.map(({ href, title }) => (
					<a
						key={title}
						onClick={() => handleClickLink(href)}
						className={s.link}
						href={href}
					>
						{title}
					</a>
				))}
				<LanguageSwitcher />
			</nav>
		</div>
	)
}
