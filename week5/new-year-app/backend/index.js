const express = require("express")
const {createTodo, updateTodo } = require("./types.js")
const { Todos } = require("./db.js")
const app = express()
const cors = require("cors");


app.use(express.json())
app.use(cors());

app.post("/todos", async (req,res)=>{
    const createPayload = req.body
    const parsedTodo = createTodo.safeParse(createPayload)
    if(!parsedTodo.success){
        res.status(411).json({
            msg : "You have send the wrong inputs"
        })
        return
    }else{
        // const newTodo = new Todos({
        //     title : parsedTodo.title,
        //     description : parsedTodo.description
        // })

        // newTodo.save().then(()=>{
        //     console.log("New Todo posted")
        // })

        await Todos.create({
            title : parsedTodo.data.title,
            description : parsedTodo.data.description,
            completed : false
        }).then(()=>{
            console.log("new todo posted")
        })

        res.json({
            msg : "New todo has been added"
        })
        

    }
})
app.get("/todos", async (req,res)=>{
    const todos = await Todos.find()
    res.status(200).json({
        todos : todos,
    })
    
})
app.put("/completed", async (req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Wrong inputs"
        })
    }
    await Todos.findOneAndUpdate({_id : req.body.id},{
        completed : true
    }) 

    // const todo = await Todos.findOne({_id : req.body.id})
    // todo.completed = true
    // todo.save().then(()=>{
    //     console.log("The todo has been updated")
    // })
    res.json({
        msg : "Todo has been updated"
    })

    
})



app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})