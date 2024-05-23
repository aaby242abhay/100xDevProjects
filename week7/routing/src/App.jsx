import './App.css'
import React, {useState, useContext} from 'react'
import CountContext from './context'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </>

  )
}

function Count() {
  const {setCount} = useContext(CountContext)
  return (
    <div>
      <Button  setCount={setCount}/>
      <CountRenderer/>
    </div>
  )

}
function CountRenderer(){
  const {count} = useContext(CountContext)
  return (
    <h1>Count: {count}</h1>
  )
 
}

function Button() {
  const {count, setCount} = useContext(CountContext)
  return (
    <>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increase</button>


      <button onClick={()=>{
        setCount(count - 1);
      }}>Decrease</button>
    </>
  )

}

export default App
