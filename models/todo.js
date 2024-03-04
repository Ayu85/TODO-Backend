// const moongoose = require('mongoose')
import mongoose from "mongoose"
const { Schema, model } = mongoose
//creating a schema / structure of the todo app  i.e. what properties the todo app will contain
const todo = new Schema({
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
//making the model named ToDo using todo schema
const todoModel = new model("ToDo", todo)
module.exports = todoModel