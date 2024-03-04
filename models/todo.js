// importing the created schema to make a model
const todoSchema = require('./schema/todoSchema')
// const { model } = require('mongoose')
//making the model named ToDo using todo schema
const todoModel = new mongoose.model("ToDo", todoSchema)
module.exports = todoModel