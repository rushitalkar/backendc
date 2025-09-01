import React from 'react'
 
const ImagePreview = (props) => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
      <h2 className='text-xl font-semibold text-center bg-gray-800 text-white py-2'>
           Original image
      </h2>

      {props.upload ? <img src={ props.upload   } className='w-48 h-50 object-cover'/> :
      <div id='load' className='flex items-center justify-center h-50 bg-grey-200 text-stone-800'>
      <p id="load">{props.loading ? "Loading...." : "No image selected"} </p>   
      </div>
}
      
      </div>
 
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
      <h2 className='text-xl font-semibold text-center bg-blue-800 text-white py-2'>
           Enhanced Image
      </h2>
 
       {props.enhanced ? <img  src={props.enhanced} className='w-full h-full object-cover'/>:
       
       <div className='flex items-center justify-center h-50 bg-white'>
          { props.enhanceLoading ? <p className='animate-spin border-t-transparent w-[5vmax] h-[5vmax]  border-red-300 border-4 rounded-full'></p>  : <p className=' text-stone-800'>No image Selected</p>  }  
      </div>}
      
       
      
 
      </div>
    </div>
  )
}
 
export default ImagePreview