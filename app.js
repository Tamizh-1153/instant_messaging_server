const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')


//database
const connectDB = require('./db/connectDB')

//routes
const userRouter = require('./routes/user')
const chatRouter = require('./routes/chat')
const messageRouter = require('./routes/message')


//auth0 authentication
const jwtCheck = require('./config/auth0Config')

app.use(express.json())
app.use(cors())
app.use('/api/v1',userRouter)
app.use('/api/v1/chat',jwtCheck,chatRouter)
app.use('/api/v1/message',jwtCheck,messageRouter)



const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>console.log('Server is listening on port 5000...'))
    } catch (error) {
        console.log(error)
    }
}

start()