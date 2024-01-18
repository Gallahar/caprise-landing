'use client'

import { useEffect } from 'react'

export const useLockScroll = () => {
	useEffect(() => {
		document.body.style.overflowY = 'hidden'

		return () => {
			document.body.style.overflowY = 'initial'
		}
	}, [])
}
