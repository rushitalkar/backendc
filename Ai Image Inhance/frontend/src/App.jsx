import { useState } from 'react'
import bg from './assets/bg.jpg'
import './App.css'
import Home from './components/Home'

function App() {

  return (
    <>
     <div className='flex flex-col items-center  h-screen bg-cover' style={{backgroundImage: `url(${bg})`}}>
    
           <div className=' bg-grey-100 py-8 px4'>
           <div className='text-center mb-8 text-white 'style={{fontWeight : 700}} >
               
                 <Home/>
           </div>
           

           <div className="text-lg"></div>
                <h2 style={{color : 'white', fontWeight : 700}} className='text-center'>Powered By Rushiii</h2>
                 <h1  className='text-4xl font-bold text-white text-center'>AI Image Enhancer</h1>
                <p style={{color : 'white', fontWeight : 700}}>Upload Your Image and let AI enhanced to in seconds! </p>
           </div>

      

     </div>
    </>
  )
}

export default App
