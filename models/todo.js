// importing the created schema to make a model
const todoSchema = require('./schema/todoSchema')
//making the model named ToDo using todo schema
const todoModel = new model("ToDo", todoSchema)
module.exports = todoModel