'use server'

import { SubscribedUser } from '@/schemas/subscribedUser'
import { connectDB } from '../utils/mongoDb'
import { transporter } from '@/config/nodemailer'
import { emailTemplate } from '../utils/emailTemplate'

interface ResponseAction {
	error: boolean
	message: string
}

async function subscribeUser({
	name,
	email,
}: {
	name: string
	email: string
}): Promise<ResponseAction> {
	try {
		await connectDB()

		const subscribedUser = await SubscribedUser.findOne({ email })

		if (subscribedUser) {
			return {
				error: true,
				message: 'subscribe.error.exist',
			}
		}

		const newUser = new SubscribedUser({ name, email })

		await newUser.save()

		await transporter.sendMail({
			subject: 'Caprise Newsletter',
			from: process.env.NODEMAILER_EMAIL,
			to: email,
			html: emailTemplate(name, email),
		})

		return {
			error: false,
			message: 'subscribe.success',
		}
	} catch (error) {
		console.log(error)
		return {
			error: true,
			message: 'subscribe.error.wentWrong',
		}
	}
}

async function unsubscribeUser(email: string): Promise<{ message: string }> {
	await connectDB()
	try {
		const isUserExist = await SubscribedUser.findOne({ email })
		if (!isUserExist) {
			return {
				message: 'unsubscribe.failure',
			}
		}
		await SubscribedUser.deleteOne({ email })
		return {
			message: 'unsubscribe.success',
		}
	} catch (error) {
		console.log(error)
		return { message: 'unsubscribe.error' }
	}
}

export { subscribeUser, unsubscribeUser }
