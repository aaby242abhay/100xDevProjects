import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [random, setRandom] = useState(0)

  return (
    <>
      <div>
       
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> 
      <div>
        <button onClick = {()=> {setRandom(Math.random())}}>
          Random is {random}
        </button>
      </div>
      <div>
        Hi there!!!
      </div>
    </>
    
  )
}

export default App
