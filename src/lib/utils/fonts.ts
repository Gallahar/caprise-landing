import localFont from 'next/font/local'

const stolzl = localFont({
	src: '/src/assets/fonts/Stolzl-Regular.woff2',
	variable: '--font-stolzl',
	weight: '400',
})

const desiraDemo = localFont({
	src: '/src/assets/fonts/desiraDemo.woff2',
	variable: '--font-desira-demo',
	weight: '400',
})

export { stolzl, desiraDemo }
