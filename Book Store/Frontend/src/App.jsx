import { use, useState } from 'react'
import './App.css'
import Home from './Home'
import Layout from './Layout'
import { createBrowserRouter, Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Course from './Components/Course'
import SignupPage from './loginComponents/SignupPage'
import Contact from './Components/Contact'
import { useAuth } from './store/AuthProvider'
import { Navigate } from 'react-router-dom'
function App() {
   const [ authUser] = useAuth()
   console.log(authUser);
   
   let router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Layout/>} >
          <Route path='' element={<Home/>}/>
          <Route path='course' element={authUser ? <Course/> : <Navigate to='/signup'/> }/>
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
