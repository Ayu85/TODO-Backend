// const moongoose = require('mongoose')
import mongoose from "mongoose"
const { Schema } = mongoose
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