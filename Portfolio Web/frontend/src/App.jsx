import { useState } from 'react'
import Navbar from './components/navbar'
import {Toaster} from 'react-hot-toast'
import './App.css'
import Home from './components/home'
import About from './components/about'
import Portfolio from './components/portfolio'
import Experience from './components/experience'
import Footer from './components/footer'
import Contact from './components/contact'
import { Link } from 'react-scroll';

function App() {

  return (
    <div>
       <div >
       <Navbar/>
       <Home/>
       <About/>
       <Portfolio/>
       <Experience/>
       <Contact/>
       <Footer/>
       </div>
       <Toaster/>
    </div>
  )
}

export default App
