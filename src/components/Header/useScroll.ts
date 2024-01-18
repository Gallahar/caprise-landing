'use client'

import { useEffect, useRef, useState } from 'react'

export const useScroll = () => {
	const previousScroll = useRef(0)
	const [active, setActive] = useState(false)
	const [isScrolled, setIsScrolled] = useState(window.scrollY > 200)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}

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

	return { active, isScrolled }
}
