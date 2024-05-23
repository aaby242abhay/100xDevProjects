import React, { Children, useMemo } from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import './Todo.css'
import axios from 'axios';



//Every time the count button is getting pressed the App component is getting re-rendered
//so the for loop is also running again which does not need to run again, we can just remember it's value and put it there
/* Therefore we use, "useMemo" */       //can also be solved using useEffect ---> But this is causing another re-render (still a good method)


function App(){
  const [count, setCount] = useState(0);
  const [input, setSum] = useState(0)
  
  const cnt = useMemo(()=>{                   //This code will only run when the input value changes 
    let cnt = 0;
    for(let i = 0; i<input; i++) {
    cnt+=i;
    }
    return cnt;
  },[input] )

  function inc(){
    setCount(count+1)
  }
  return(
    <div>
      <input type="Text" placeholder='Enter No.' onChange={(e) =>{
        setSum(parseInt(e.target.value))
      }}/>
      <h3>Sum is {cnt}.</h3>
      <button onClick={inc}> Counter {count}</button>
    </div>
  )

}





























// function App(){
//   const [id,setId] = useState('1');
//   function change(_id){
//     setId(_id)
//   }
//   return(
//     <div>
//       <button onClick={()=>change(1)}>1</button>
//       <button onClick={()=>change(2)}>2</button>
//       <button onClick={()=>change(3)}>3</button>
//       <button onClick={()=>change(4)}>4</button>
//       <Todo id = {id} />
//     </div>
//   )
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todo?id=" + (id? id : 1))
//       .then((res)=>{
//         setTodo(res.data.todo)
//         console.log(res.data.todo)
//       })
//   }, [id])

//   return(
//     <div>
//       <h1>{todo.title }</h1>
//       <h3>{todo.description}</h3>
//     </div>
//   )

// }



































// function App(){
//   const [todos, setTodos] = useState([])


//   // useEffect(()=>{                       //The code only runs when the component comes on the screen for the first time i.e. when it mounts
//   //   setInterval(()=>{
//   //     axios.get("https://sum-server.100xdevs.com/todos")
//   //       .then((res)=>{
//   //         setTodos(res.data.todos)
//   //       })
    
//   //   }, 3*1000)
//   // }, [])

//   return(
//     <>
//       {/* {todos.map((todo) =>{
//         return(
//           <Todo title = {todo.title} description={todo.description} id = {todo.id}></Todo>
//         )
//       })} */}   
//     </>
//   )
// }


//     </div>
//   )
// }
// const Todo = ({ title, description, id }) => {
//   return (
//     <div className="my-component">
//       <h2>{title}</h2>
//       <p>{description}</p>
//       {/* <p>ID: {id}</p> */}
//     </div>
//   );
// };




























// function App(){

//   return(
//     <div>
//       <CardWrapper> So this is being written inside the CardWrapper and is not bieng passed as a prop. </CardWrapper>

//     </div>
//   )
// }

// function CardWrapper({children}){
//   console.log(children)
//   return(
//     <div style = {{border : "10px solid black", padding : 10}}>
//       {children}
//     </div>
//   )
// }




























// function App(){
//   return(<div>
//      <CardWrapper innerComponent = {<TextComponent/>}> </CardWrapper>
//   </div>
   
//   )

// }
// function TextComponent(){
//   return(
//     <div>
//       Hi there!!!
//     </div>
//   )
// }
// function CardWrapper(props){
//   return(
//     <div style = {{border : "2px", padding : 20}}>
      
//       {props.innerComponent}
//     </div>
//   )
// }



 






















//All the three components are getting rendered here


// function App() {
//   const [todos, setTodos] = useState([{
//     title : "Title_1",
//     description : "Description_1"
//   },{
//     title : "Title_2",
//     description : "Description_2"
//   },{
//     title : "Title_3",
//     description : "Description_3"
//   }])

//   return (
//     <>
//       <AddTodoBox/>
//       {todos.map((todo) =>{
//         return (
//           <>
//             <Todo title={todo.title} description={todo.description}></Todo>
//           </>
//         )
//       })}

     
//     </>
//   )

// }
// function AddTodoBox(){
//   const [title, setTitle] = useState('')
//   const [description, setDescription] = useState('')
//   return(
// //     <>
// //       <input type="text" placeholder='title' onChange={(e)=> setTitle(e.target.value)}/>
// //       <input type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)}/>
// //       <TodoAddButton title = {title} description = {description}/>
// //     </>
// //   )
// // }
// // function Todo(props){
// //   return(
// //     <>
// //       <h1>
// //         {props.title}
// //       </h1>
// //       <h5>
// //         {props.description}
// //       </h5>
// //     </>
// //   )
// // }
// // function TodoAddButton(props){
// //   function addTodo(){
// //     <Todo title={props.title} description={props.description} />

// //   }
// //   console.log(props.title)

// //   return(
// //     <>
// //       <button onClick ={addTodo} >Add Todo!!!</button>
// //     </>
// //   )
// // }


// // function HeaderWithButton(_props){
// //   const [firstTitle, setTitle] = useState("Aaby Abhay")
// //   return(
// //     <>
// //       <Button setTitle = {setTitle}></Button>
// //       <Header title = {firstTitle} />
// //     </>
// //   )
// // }

// // function Button(props){
// //   function change(){
// //     props.setTitle(Math.floor(Math.random()*10000));
    
// //   }

// //   return (
// //     <>
// //     <button onClick={change}>Click on me to change the title!</button>
// //     </>
// //   )
// // }
// let counter = 4;
// function App(){
//   function addTodo(){
//     setTodos([...todos,{
//       id : counter++,
//       title : Math.random(),
//       description : Math.random()
//     }])
//   }
//   const [todos, setTodos] = useState([{
//         id : 1,
//         title : "Title_1",
//         description : "Description_1"
//       },{
//         id : 2,
//         title : "Title_2",
//         description : "Description_2"
//       },{
//         id : 3,
//         title : "Title_3",
//         description : "Description_3"
//       }])
//   return(
//     <div>
//       <button onClick={addTodo} >Add Todo!!!</button>
//       {todos.map((todo)=>{
//         return(
//           <>
//             <Todo title={todo.title} key = {todo.id} description={todo.description} ></Todo>
//           </>

//         )
//       })}

//     </div>
//   )
// }

// function Todo({title, description}){
//   return(
//     <>
//       <h3>{title} </h3>
//       <h5>{description}</h5>
//     </>
//   )
// }

export default App
