//this file will contain the code for database / mongodb connection with the server
const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = () => {
    mongoose.connect(process.env.CONNECTION_STRING).then(() => {
        console.log("****Boom...DB Connected****");
    }).catch((err) => {
        console.log("Oopss...DB Connrction Failed : ", err);
    })
}