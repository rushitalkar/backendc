import React from 'react'
import { useAuth } from '../store/AuthProvider'
import { toast } from 'react-toastify'
const Logout = () => {
  let [authUser , setAuthUser] = useAuth()

  let handleLogout = ()=>{
      try {
        setAuthUser({
          ...authUser,
          user : null
        })
        localStorage.removeItem("User")
        toast.success("Logout Successfully")
        setTimeout(() => {
         window.location.reload()

        } , 2000)
      } catch (error) {
        toast.error(error)
      }
  }
  return (
    <div>
    <button onClick={handleLogout} type="submit" className="cursor-pointer bg-red-500 hover:bg-red-700  focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Logout</button>
    </div>
  )
}

export default Logout
