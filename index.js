//this file will only contain the logic to import ecpress and start the server on a port
const express = require('express') //importing express
const todoRoutes = require('./routes/todoRoutes')
const app = express() //storing express in a variable
require('dotenv').config()
//add the parser to parse the content of body
app.use(express.json())
const connectDB = require('./config/database')
app.listen(process.env.PORT, () => { //to start the server on 3000 port
    console.log(`server started on ${process.env.PORT} port`);
})
connectDB()