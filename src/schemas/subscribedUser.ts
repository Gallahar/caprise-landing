import mongoose, { Schema } from 'mongoose'

const SubscribedUserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
})

const SubscribedUser =
	mongoose.models.SubscribedUser ||
	mongoose.model('SubscribedUser', SubscribedUserSchema)

export { SubscribedUser }
