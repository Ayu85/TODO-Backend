//this file will contain the code for database / mongodb connection with the server
const mongoose=require('mongoose')
require()
const connectDB=()=>{
    mongoose.connect(process.env.CONNECTION_STRING)
}