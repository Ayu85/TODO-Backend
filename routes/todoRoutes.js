const express = require('express')
const route = express.router();
//import the controller which is used to create a todo item
const todo = require('../controllers/createTodo')
router.post('/createtodo', todo)

module.exports = router