'use client'

import { useEffect, useRef, useState } from 'react'

export const useScroll = () => {
	const previousScroll = useRef(0)
	const [active, setActive] = useState(window.scrollY > 0)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > previousScroll.current) {
				setActive(true)
			}
			if (window.scrollY < previousScroll.current) {
				setActive(false)
			}
			previousScroll.current = window.scrollY
		}
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return { active }
}
