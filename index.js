//this file will only contain the logic to import ecpress and start the server on a port
const express = require('express') //importing express
require('dotenv').config()
const app = express() //storing express in a variable
const connectDB=require('./config/database')

app.listen(process.env.PORT, () => { //to start the server on 3000 port
    console.log(`server started on ${process.env.PORT} port`);
})
connectDB()