import mongoose from 'mongoose'

const connection = {}

const connect = async () => {
	if (connection.isConnected) {
		console.log('already connected to database.')
		return
	}

	if (mongoose.connections.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState

		if (connection.isConnected === 1) {
			console.log('use previous database connection.')
			return
		}

		await mongoose.disconnect()
	}

	const database = await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	console.log('new connection to mongo database')
	connection.isConnected = database.connections[0].readyState
}

const disconnect = async () => {
	if (connection.isConnected) {
		if (process.env.NODE_ENV === 'production') {
			await mongoose.disconnect()

			console.log('disconnected to database')
			connection.isConnected = false
		} else {
			console.log('not disconnected to database')
		}
	}
}

const database = { connect, disconnect }

export default database
