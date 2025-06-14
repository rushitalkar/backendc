import React from 'react'
import { useAuthStore } from '../store/store'

const HomePage = () => {

  const {authUser} = useAuthStore()
  return (
    <div>
      <li>Homepage</li>
    </div>
  )
}

export default HomePage
