import Link, { LinkProps } from 'next/link'
import s from './custom-link.module.scss'
import { ccn } from '@/lib/utils/ccn'
interface CustomLinkProps extends LinkProps {
	children?: string
	className?: string
}

export const CustomLink = ({
	children,
	className,
	...rest
}: CustomLinkProps) => {
	return (
		<Link {...rest} className={ccn(s.customLink, className)}>
			{children}
		</Link>
	)
}
