//this file will only contain the logic to import ecpress and start the server on a port
const express = require('express') //importing express
const connectDB = require('./config/database')
const app = express() //storing express in a variable
require('dotenv').config()
//add the parser to parse the content of body
app.use(express.json())
//importing todo todo routes
const todoRoutes = require('./routes/todoRoutes')
app.use('/v1/api', todoRoutes)
app.listen(process.env.PORT, () => { //to start the server on 3000 port
    console.log(`server started on ${process.env.PORT} port`);
})
connectDB()