import './App.css'
import React, {useState, useContext} from 'react'
import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil';
import { countAtom } from './store/atoms/count';


function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>

  )
}

function Count() {
  return (
    <div>
      <Button />
      <CountRenderer/>
    </div>
  )

}
function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return (
    <h1>Count: {count}</h1>
  )
 
}

function Button() {
  const [count, setCount] = useRecoilState(countAtom);
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
