import { ComponentPropsWithoutRef } from 'react'
import s from './heading.module.scss'
import { ccn } from '@/lib/utils/ccn'
export const Heading = ({
	className,
	children,
	...rest
}: ComponentPropsWithoutRef<'h2'>) => {
	return (
		<h2 className={ccn(s.heading, className)} {...rest}>
			{children}
		</h2>
	)
}
