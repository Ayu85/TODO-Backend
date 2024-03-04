const express = require('express')
const route = express.Router();
//import the controller which is used to create a todo item
const todo = require('../controllers/createTodo')
route.post('/createtodo', todo)

module.exports = route