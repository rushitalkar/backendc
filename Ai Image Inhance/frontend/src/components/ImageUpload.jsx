import React from 'react'

const ImageUpload = () => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-2 w-full max-w-2xl'>
      <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-800 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>
        <input type="file" className="hidden" id='fileInput' />
      <span className='text-lg font-medium text-gray-800 '>
        <p className='text-center'> Click and drag to Upload your Image </p>
      </span>
      </label>
      
    </div>
  )
}

export default ImageUpload