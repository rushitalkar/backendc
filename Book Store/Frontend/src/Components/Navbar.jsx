import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {  NavLink } from 'react-router-dom'
import { useRef } from 'react'
import Login from './Login'
import { useAuth } from '../store/AuthProvider'
import { toast } from 'react-toastify'
import Logout from './Logout'
const Navbar = () => {
    const [authUser , setAuthUser] = useAuth()
   useEffect(() => {
     
      if (!authUser) {
      toast.error("Please Login First You Can't Access This Page")
    }else{
      toast.success("You can now access Course Page")
    }
   },[])
    
    const [scroll, setScroll] = useState(false)
    const [mode ,setMode] = useState(null)
    const checkbox = useRef()
    let root = document.querySelector(':root')
    let [Model , setModel] = useState(false)
    let handleclick =()=>{
      setMode(checkbox.current.checked ? "dark" : "light")
      console.log(mode);
      
      checkbox.current.checked ? root.classList.add("dark") : root.classList.remove("dark")
    }
    
       
    useEffect(() => {

     const handleScroll = ()=>{
      if(window.scrollY > 0){
        setScroll(true)
      }else{
        setScroll(false)
      }
     }
 
    
     
     window.addEventListener('scroll', handleScroll)
     console.log(checkbox.current.value);
    
     
          
     
     
        
    },[])


 

  const NavItems = (
    <>
      <li ><NavLink className={({isActive}) => isActive ? 'bg-pink-500' : ''} to=''>Home</NavLink></li>
      <li ><NavLink className={({isActive}) => isActive ? 'bg-pink-500' : ''} to='course' >Books</NavLink></li>
      <li ><NavLink className={({isActive}) => isActive ? 'bg-pink-500' : ''} to='contact' >Contact</NavLink></li>
      <li ><NavLink className={({isActive}) => isActive ? 'bg-pink-500' : ''} to='about' >About</NavLink></li>
      <li ><NavLink className={({isActive}) => isActive ? 'bg-pink-500' : ''} to='create' >Create Book</NavLink></li>
   
    </>
  )
  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 sticky pt-0 mt-0 top-0 left-0 right-0 ${scroll ? 'shadow-lg' : ''} z-50`}>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {NavItems}
            </ul>
          </div>
          <a className=" text-2xl font-bold">Book Store</a>
        </div>
        <div className='navbar-end space-x-2'>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {NavItems}

            </ul>
          </div>
          <div className='hidden md:block'>
            <label className="px-3 py-1 border flex items-center gap-2 rounded">
              <input
                type="search" 
                className='grow outline-none' 
                required placeholder="Search" />

              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </label>

          </div>

          <label className="toggle text-base-content">
            {/* this hidden checkbox controls the state */}
            <input id='box' ref={checkbox} type="checkbox" className="theme-controller" value={mode} onChange={handleclick} />


             <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
             <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

          </label>
  {
    authUser ? <Logout/>  :
    <div className=" ">
            <button onClick={()=> setModel(true)}  className="  bg-black p-1 px-2 text-white hover:bg-slate-700 rounded cursor-pointer"
             > Login</button>
             {Model && <div className='md:w-[1264px] fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-md '><Login setmodel={setModel}/></div> }
          </div>
  }
          
      
        </div>

      </div>

    </div>
  )
}

export default Navbar
