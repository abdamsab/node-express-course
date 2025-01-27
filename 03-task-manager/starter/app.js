
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
//require('dotenv').config()
const notFound = require('./middleware/notfound')

const port = process.env['LISTEN_PORT']
const connectionString = process.env['CONNECTION_STRING']
//const db_url = process.env.MONGO_URI

//middleware
app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks', tasks)

app.use(notFound)

const start = async ()=>{
	try{
		await connectDb(connectionString)
			//.then(()=>console.log('connected to db'))
			//.catch((err)=>console.log(err))
		app.listen(port, console.log(`Server is running on prot: ${port}`))
	}
	catch(error){
		console.log(error)
	}
}

start()

