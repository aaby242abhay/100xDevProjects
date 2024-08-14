import './App.css'
import React, {useState, useContext} from 'react'
import { useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector} from './store/atoms/count';


function App() {
  console.log("App component rendered");
  return (
    <>
      <RecoilRoot>
        <Count />
        <Even/>
      </RecoilRoot>
    </>

  )
}

function Count() {
  console.log("Count component rendered");
  return (
    <div>
      <Button />
      <CountRenderer/>
    </div>
  )

}

function CountRenderer(){
  console.log("CountRenderer component rendered");
  const count = useRecoilValue(countAtom);
  return (
    <h1>Count: {count}</h1>
  )
 
}

function Button() {               

  //making sure the button component is not re-rendering.
  //we will not import the count state varible here
  //we will use a different approach to set the count variable without the count varible through a different syntax
  //the setCount function automatically takes count as an argument ----> This simple fact is very important to stop re-renderings

  console.log("Button component rendered");

  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button onClick={() => {
        setCount(c => c + 1);
      }}>Increase</button>


      <button onClick={()=>{
        setCount(c => c + 1);
      }}>Decrease</button>
    </>
  )

}
//selector

function Even(){
  const even = useRecoilValue(evenSelector);
  // if(count%2 == 0) return <h1>Even</h1>;
  // else return <></>
  return(
    <>
      {even%2 == 0 ? <h1>Even</h1> : <></>}
    </>
  )
}







// function Button() {          //Here the button component is re-rendering.
//   const [count, setCount] = useRecoilState(countAtom);
//   return (
//     <>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}>Increase</button>
//       <button onClick={()=>{
//         setCount(count - 1);
//       }}>Decrease</button>
//     </>
//   )
// }

export default App
