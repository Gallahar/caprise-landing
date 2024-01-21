

import nodemailer from 'nodemailer'

const { NODEMAILER_MAIL, SMTP_PASS } = process.env

export const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: NODEMAILER_MAIL,
		pass: SMTP_PASS,
	},
})
