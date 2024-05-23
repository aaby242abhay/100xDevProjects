/* todos = [{
        title : "abc",
        desciption : "abc"
    },{
        title : "efg",
        description : "efg"
    }]
*/

export function Todos({todos}){
    return (
        <div>
            {todos.map((todo)=>{
                return(
                    <div>
                        <h1>{todo.title}</h1>
                        <h1>{todo.description}</h1>
                        <button>{todo.completed?"Done" : "Mark as Done!!"}</button>
                    </div>
                )
            })}
        </div>
    )
}