import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getPost } from './postApi'
import Posts from './components/Posts'
function App() {
   
  
  
  return (
    <section className="main-section">
      <Posts/>
    </section>
  )


}

export default App
