import React from 'react'
import Navbar from './Components/Navbar'
import Layout from './Outlet/Layout'
import HomePage from './Components/HomePage'
import SignUp from './Components/SignUp'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Setting from './Components/Setting'
import { useAuthStore } from './store/store'
import { useEffect } from 'react'
import {Loader} from "lucide-react"
import { Navigate } from 'react-router-dom'
import {Toaster} from "react-hot-toast"


import { createBrowserRouter   , createRoutesFromElements, Route , RouterProvider } from "react-router-dom"
const App = () => {
   
   const {authUser, checkAuth , isChekingAuth} = useAuthStore()

   useEffect(()=>{
    checkAuth()
   },[checkAuth])

 

   if (isChekingAuth && !authUser) {
      return(

    
        <div className='flex justify-center items-center h-screen'>
          <Loader className='animate-spin size-12'/>
        </div>
      )
   }
   


   let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path='' element={ authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path='signup'  element={ !authUser ?<SignUp/> : <Navigate to="/"/>} />
        <Route path='login'  element={!authUser  ? <Login/> : <Navigate to="/"/> } />
        <Route path='seting'  element={<Setting/>} />
        <Route path='profile'  element={authUser ? <Profile/> : <Navigate to="/login"/>} />

        

      </Route>

      
    )
   )

  return (
    <div>
    <RouterProvider router={router}/>
     
    <Toaster/> 
    </div>
  )
}

export default App 