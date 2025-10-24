import { useState } from 'react'
import './App.css'
import Home from './Home'
import Layout from './Layout'
import { createBrowserRouter, Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Course from './Components/Course'
import SignupPage from './loginComponents/SignupPage'
import Contact from './Components/Contact'
import DummyLogin from './Components/DummyLogin'
function App() {
   let router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Layout/>} >
          <Route path='' element={<Home/>}/>
          <Route path='course' element={<Course/>}/>
          <Route path='signup' element={<SignupPage/>}/>
          <Route path='contact' element={<Contact/>}/>
          
      </Route>
      
    )
    

   )
   
    

   
   
  

  return (
    <div className='router'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
