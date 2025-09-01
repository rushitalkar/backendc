import React, { useActionState, useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { ApiEnhanced } from '../API/ApiEnhanced'
const Home = () => {
  const [upload , setUpload] = useState(null)
  const [enhanced , setInhanced ] = useState(null)
  const [loading , setLoading] = useState(false)
  const [enhanceLoading , setenhanceLoading] = useState(false)
  const uploadImageHandler = async (file)=>{
    
    setUpload(URL.createObjectURL(file))
     
    try {
      enhanceLoading(true)
       const enhaceUrl = await ApiEnhanced(file)
       setInhanced(enhaceUrl)
       enhanceLoading(false)
    } catch (error) {
      console.log(error);
      alert("Error ehile Enhancing Image PLease try Again latter !") 
    }
  }


  
  return (
    <div>
      <ImageUpload
        uploadImageHandler={uploadImageHandler}
        loading = {loading}
        setLoading ={setLoading}
        enhanceLoading = {enhanceLoading}
      />
      <ImagePreview
        upload = {upload}
        enhanced = {enhanced}
        loading = {loading}
        
      />
    </div>
  )
}

export default Home
