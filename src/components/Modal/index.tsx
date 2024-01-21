'use client'

import { ReactNode, useEffect } from 'react'
import s from './modal.module.scss'
import { IconCross } from '@/assets/icons/IconCross'
import { useOverflow } from '@/lib/hooks/useOverflow'

interface ModalProps {
	children: ReactNode
	closeHandler: () => void
	autoclose: boolean
}

export const Modal = ({ children, closeHandler, autoclose }: ModalProps) => {
	useOverflow()

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>
		if (autoclose) {
			timeoutId = setTimeout(() => closeHandler(), 4000)
		}
		return () => clearTimeout(timeoutId)
	}, [autoclose,closeHandler])

	return (
		<div onClick={closeHandler} className={s.overlay}>
			<div onClick={(e) => e.stopPropagation()} className={s.content}>
				<button onClick={closeHandler} className={s.closeButton}>
					<IconCross />
				</button>
				<p>{children}</p>
			</div>
		</div>
	)
}
