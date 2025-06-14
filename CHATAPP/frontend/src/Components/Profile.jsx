import React from 'react'
import { useAuthStore } from '../store/store'
const Profile = () => {
    const {authUser , isUpdatingProfile , updateProfile} = useAuthStore()
    const handleSubmit =()=>{

    }
  
  return (
    <div>
      
    </div>
  )
}

export default Profile
