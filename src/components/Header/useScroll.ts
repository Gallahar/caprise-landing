'use client'

import { useEffect, useState } from 'react'

export const useScroll = () => {
	let previousScroll = 0
	const [active, setActive] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > previousScroll) {
				setActive(true)
			}
			if (window.scrollY < previousScroll) {
				setActive(false)
			}
			previousScroll = window.scrollY
		}
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return { active }
}
