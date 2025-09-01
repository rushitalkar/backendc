import React from 'react'

const Card = ({book , bookimage }) => {
    
  return (
   <div id='card' className="card bg-base-100 w-86 shadow-xl cursor-pointer hover:scale-105 duration-200 hover:shadow-2xl  hover:z-40 ">
  <figure>
    <img
      src={bookimage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {book.title}
      <div className="badge badge-secondary">{book.Category}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${book.Prize}</div>
      <div className="badge badge-outline hover:bg-pink-500">Buy Now</div>
    </div>
  </div>
</div>
  )
}

export default Card
