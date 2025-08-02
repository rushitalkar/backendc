import React from 'react'
import python from '../assets/python.webp'
import mongo from '../assets/mongodb.jpg'
import express from '../assets/express.png'
import react from '../assets/reactjs.png'
import node from '../assets/node.png'
import figma from '../assets/figma.png'

const Portfolio = () => {
   
    const cardItem = [
    {
       id : 1,
       logo : mongo,
       name : "MongoDB",
       code : "Source Code"
    },
    {
        id : 2,
       logo : express,
       name : "ExpressJS",
       code : "Source Code"
    },
    {
        id : 3,
       logo : react,
       name : "ReactJS",
       code : "Source Code"
    },
    {
        id : 4,
       logo : node,
       name : "NodeJS",
       code : "Source Code"
    },
    {
        id : 5,
        logo : python,
        name : "Python",
        code : "Source Code"
    },
    {
        id : 6,
        logo : figma,
        name : "Figma",
        code : "Projects"
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
                    <div >
                        <button onClick={()=>{
                            if(item.name == "Figma"){
                                return window.open("https://www.figma.com/files/team/1215698769135066948/recents-and-sharing?fuid=1215698757814737666")
                            }else{
                                 return window.open("https://github.com/rushitalkar/backendc/tree/main")
                            }
                        }}  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>{item.code}</button>
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
