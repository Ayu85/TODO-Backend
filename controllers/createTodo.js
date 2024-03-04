const Todo = require('../models/todo') //importing the model to create todo controller
const createTodo = async (req, res) => {
    try {
        //extract the data from request body (the data entered by user on the ui)
        const { title, description } = req.body;
        //creating a new todo object and insert intro the mongo db database 
        const todoData = await Todo.create({ title, description });
    }
    catch (error) {
        console.log(error);
    }
}