import React from 'react'
import python from '../assets/python.webp'
import mongo from '../assets/mongodb.jpg'
import express from '../assets/express.png'
import react from '../assets/reactjs.png'
import node from '../assets/node.png'
const Portfolio = () => {
    const cardItem = [
    {
       id : 1,
       logo : mongo,
       name : "MongoDB"
    },
    {
        id : 2,
       logo : express,
       name : "ExpressJS"
    },
    {
        id : 3,
       logo : react,
       name : "ReactJS"
    },
    {
        id : 4,
       logo : node,
       name : "NodeJS"
    },
    {
        id : 5,
        logo : python,
        name : "Python"
    }


]
  return (
    <>
    <div  name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold md-5'>Portfolio</h1>
        <span className='font-semibold'>Featurd Project</span>
        <div className='grid grid-cols-1 md:grid-cols-4 my-5 gap-3'>
           {
            cardItem.map((item) => {
                return  <div className='md:h-[250px] md:w-[250px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200 ' key={item.id}>
                    <img className='w-[120px] h-[120px] rounded-full ' src={item.logo} alt="" />
                    <div>
                        <div className=' px-2 font-bold mb-2 text-2xl'>{item.name}</div>
                    </div>
                    <div className='flex space-x-2 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Video</button>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Source Code</button>
                    </div>
                </div>
                                
                                  
                    
                
            })
           }
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio
