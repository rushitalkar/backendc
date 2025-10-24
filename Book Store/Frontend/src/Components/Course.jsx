import React, { use } from 'react'
import Banner from './Banner'
import Card from './Card';
import readBook from '../Assets/read.png'
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';
const Course = () => {
  let navigate = useNavigate()
  
 const [book,setBook] = useState([])

 useEffect(()=>{
  try {
    (async()=>{
       const responce = await axios.get("http://localhost:4001/api/book")
       console.log(responce.data);
       setBook(responce.data)
       
    })()
  } catch (error) {
    console.log(error);
    
  }
 },[])
  
  return (
   <div>
         <div   className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
          <div className='text-center justify-center pt-12'>
            <h1 className='font-semibold text-2xl md:text-4xl '> We're delighted to have you <span className='text-pink-500'>here!:)</span></h1>
            <p className='mt-6'>Books are synonymous with learning and education, and have been a concrete source of information and knowledge for many generations. It is essential for children to develop a habit of reading books from a young age as it builds their vocabulary and self-study skills</p>
            <button onClick={()=> navigate(-1)}  className='bg-pink-500 hover:bg-pink-700 btn m-4 '>Back</button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 mt-4'>
              {
                book.map((book , i)=>
                 <Card key={i} book={book} bookimage={readBook} link={book.read_URL} />

                )
            }
          </div>
            
            
         </div>
    </div>
  )
}

export default Course
