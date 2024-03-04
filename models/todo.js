// const moongoose = require('mongoose')
const todoSchema = require('./schema/todoSchema')
//making the model named ToDo using todo schema
const todoModel = new model("ToDo", todoSchema)
module.exports = todoModel