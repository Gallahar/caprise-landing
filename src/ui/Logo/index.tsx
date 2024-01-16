import { ccn } from '@/lib/utils/ccn'
import s from './logo.module.scss'
import { ComponentPropsWithoutRef } from 'react'

export const Logo = ({
	className,
	...rest
}: ComponentPropsWithoutRef<'span'>) => {
	return (
		<span {...rest} className={ccn(s.logo, className)}>
			Caprise
		</span>
	)
}
