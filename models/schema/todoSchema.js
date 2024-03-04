import mongoose from "mongoose"
// const { Schema } = mongoose
//creating a schema / structure of the todo app  i.e. what properties the todo app will contain
const todo = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    addedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
})
module.exports=todo