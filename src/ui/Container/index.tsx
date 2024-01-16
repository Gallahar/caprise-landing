import s from './container.module.scss'
import { ccn } from '@/lib/utils/ccn'
import { ComponentPropsWithoutRef } from 'react'

export const Container = ({
	className,
	children,
	...rest
}: ComponentPropsWithoutRef<'div'>) => {
	return (
		<div {...rest} className={ccn(s.container, className)}>
			{children}
		</div>
	)
}
