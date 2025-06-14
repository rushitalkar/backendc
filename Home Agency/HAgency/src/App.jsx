import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Navbar from '../../HomeAgency/src/Components/Navbar'
import About from './Pages/About'
function App() {

  return (
    <>
       <Navbar/>
       <Home />
       <About />
    </>
  )
}

export default App
