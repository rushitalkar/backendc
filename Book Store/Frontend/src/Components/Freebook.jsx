import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';
import readBook from '../Assets/read.png'
import { useState , useEffect } from 'react';
import axios from 'axios';

const Freebook = () => {
  const [books,setBook] = useState([])

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
    const freeBook = books.filter((book)=> book.Category === "Free")
    
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
    
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div >
          <h1 className='font-bold pb-2 text-xl'>Free Offerd Books</h1>
          <p  className=''>concrete source of information and knowledge for many generations. It is essential for children to develop a habit of reading books from a young age as it builds their vocabulary and self-study skills. Considering the role books play in education</p>
      </div>
      <div>
      <Slider {...settings}>
        {freeBook.map((book , i)=>(
            <Card key={i} book={book} bookimage={readBook} />
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Freebook
