import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos")
    .then((res)=>{
      const data = res.json()
      .then((data)=>{
        setTodos(data.todos)
      })
    }
  )
  return (
    <>
      <div>
        <CreateTodo/>
        <Todos todos = {todos}/>
      </div>
      
    </>
  )
}

export default App
