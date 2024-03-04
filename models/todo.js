const mongoose=require('mongoose')
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
//making the model named ToDo using todo schema
const todoModel = new mongoose.model("ToDo", todo)
module.exports = todoModel