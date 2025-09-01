import React from 'react'

const ImageUpload = (props) => {

   const showImageHandler = (e)=>{
        props.setLoading(true)

        const file = e.target.files[0]
        setTimeout(() => {

          if (file) {
          props.uploadImageHandler(file)
        } 
        props.setLoading(false)
         
        }, 3000);
        
        
   }



  return (
    <div className='bg-white shadow-lg rounded-2xl p-2 w-full max-w-2xl'>
      <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-dashed border-gray-800 rounded-lg p-6 text-center hover:border-blue-500 transition-all'>
        <input
         type="file" 
         className="hidden" 
         id='fileInput'
         onChange={showImageHandler} />
      <span className='text-lg font-medium text-gray-800 '>
        <p className='text-center'> Click and drag to Upload your Image </p>
      </span>
      </label>
      
    </div>
  )
}

export default ImageUpload