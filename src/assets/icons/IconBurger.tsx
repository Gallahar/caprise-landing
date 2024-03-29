import { ComponentPropsWithoutRef } from 'react'

export const IconBurger = (props: ComponentPropsWithoutRef<'svg'>) => {
	return (
		<svg
			{...props}
			width='40'
			height='11'
			viewBox='0 0 40 11'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<line y1='0.5' x2='40' y2='0.5' stroke='#282525' />
			<line y1='10.5' x2='40' y2='10.5' stroke='#282525' />
		</svg>
	)
}
