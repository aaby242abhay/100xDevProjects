import './App.css'
import React from 'react'
import { useState } from 'react'

function App2(){
    const[todos, setTodos] = useState([{
        title : "todo_1",
        description : "description_2"
    },{
        title : "todo_2",
        description : "description_2"
    }])

    function addTodo(){
        setTodos([...todos,{
            title : "newTodo",
            description : "newDescription"
        }])
    }

    return(
        <div>
            <button onClick={addTodo} >Add random Todo!!!</button>
        {
            todos.map( (todo) =>{
                return <Todo title = {todo.title} description = {todo.description}></Todo> 
            })
        }
            <DummyButton/>

        </div>
    )
    
}
function DummyButton(){
    return(
        <button>Dummy
        {console.log("does it??")}
        </button>
    )
}
function Todo(props){
    return(
        <div>
        <span>{props.title}</span>
        <span>{props.description}</span>
        </div>
    )
}
export default App2