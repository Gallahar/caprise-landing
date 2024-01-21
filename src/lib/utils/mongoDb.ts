import mongoose, { Mongoose } from 'mongoose'

const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
	throw new Error('MONGODB_URI is not provided')
}
let cached: {
	promise: Promise<Mongoose> | null
	conn: Mongoose | null
} = { promise: null, conn: null }

async function connectDB() {
	if (cached.conn) return cached.conn

	if (!cached.promise) {
		cached.promise = mongoose
			.connect(MONGODB_URI ?? '')
			.then((mongoose) => mongoose)
	}

	cached.conn = await cached.promise
	return cached.conn
}

export { connectDB }
