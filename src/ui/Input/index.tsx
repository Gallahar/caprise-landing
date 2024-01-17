import { ComponentPropsWithoutRef } from 'react'
import s from './input.module.scss'
import { ccn } from '@/lib/utils/ccn'

export const Input = ({
	className,
	...rest
}: ComponentPropsWithoutRef<'input'>) => {
	return (
		<input className={ccn(s.input, className)} {...rest}/>
	)
}
