import { ComponentPropsWithoutRef } from 'react'

export const IconCross = (props: ComponentPropsWithoutRef<'svg'>) => {
	return (
		<svg
			{...props}
			width='24'
			height='23'
			viewBox='0 0 24 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<line
				y1='-0.5'
				x2='31'
				y2='-0.5'
				transform='matrix(0.707107 0.707107 -0.709659 0.704546 1 1)'
				stroke='#282525'
			/>
			<line
				y1='-0.5'
				x2='31'
				y2='-0.5'
				transform='matrix(-0.707107 0.707107 0.709659 0.704546 23 1)'
				stroke='#282525'
			/>
		</svg>
	)
}
