import database from 'database'

const handler = async (req, res) => {
	await database.connect()
	await database.disconnect()
	res.send('ok')
}

export default handler
