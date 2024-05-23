
// react - Query
// The whole point of react was to get away from all this document.getElementById shitty things
// One way to do this ---> create a local state variable

import {useState} from 'react'

export function CreateTodo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    async function addTodo(){

        const res = await fetch("http://localhost:3000/todos",{
            method : "POST",
            headers : { 'Content-Type': 'application/json' },
            body : JSON.stringify({
                title : title,
                description : description,
                completed : false
            })
        })
        if(!res.ok){
            console.log("NOT OKAY!!!")
        }
        console.log("Hiiii")
        const data = await res.json()
        console.log(data.msg);
    }
    return (
        <div>
            <input id = "t" style = {{padding : 10, margin : 10}}type="text" placeholder="title" onChange={(e)=> {
                const value = e.target.value
                setTitle(e.target.value)
            }} /> <br/>
            <input id = "d" style = {{padding : 10,margin : 10}}type="text" placeholder="description" onChange={(e)=> {
                const value = e.target.value
                setDescription(e.target.value)
            }} /><br/>

            <button onClick = {addTodo} style = {{
                padding : 10,
                margin : 10
            }}>Add Todo!!!</button>

        </div>
    )
}