const mongoose = require("mongoose")
const mongoUrl = "mongodb+srv://aaby242abhay:%402l4P2@mongo101.mjuaccs.mongodb.net/todos-application"

mongoose.connect(mongoUrl)
.then(()=>{
    console.log("DB connected")
})
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todos = mongoose.model("Todos", todoSchema)

module.exports = {
    Todos
}