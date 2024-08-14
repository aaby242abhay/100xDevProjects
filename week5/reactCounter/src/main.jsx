import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import './index.css'
import { Test } from './Test.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(

//     <App />       //This here is our first component
    
// )

ReactDOM.createRoot(document.getElementById('newRoot')).render(
  <Test />
)
