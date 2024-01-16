import { ComponentPropsWithoutRef, PropsWithoutRef } from 'react'
import s from './button.module.scss'
import { ccn } from '@/lib/utils/ccn'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	variant: 'primary' | 'secondary'
}

export const Button = ({
	className,
	variant = 'primary',
	children,
	...rest
}: ButtonProps) => {
	return (
		<button {...rest} className={ccn(s.button, s[variant], className)}>
			{children}
		</button>
	)
}
