import './App.css'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes , useNavigate} from 'react-router-dom'

const Dashboard = React.lazy(()=> import('./components/Dashboard'));
const Landing = React.lazy(()=> import('./components/Landing'));
//routes will now lazyly import these instead of importing them all at once
import {Topbar} from './components/Topbar'

function App_routing() {

  return (
    <>

    <BrowserRouter>
    <Topbar/>
      <Routes>
      
        <Route path="/" element={
          <Suspense fallback={<div>Loading...</div>}>
            <Landing/>  
          </Suspense>
        }/>
        <Route path="/dashboard" element={
          <Suspense fallback = {<div>Loading...</div>}>
            <Dashboard/>
          </Suspense>
        }/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export  default App_routing;


