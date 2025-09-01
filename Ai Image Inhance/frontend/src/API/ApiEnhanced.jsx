import React from 'react'
const apikey = "wxpam6ejhaufs49y9"
const baseURL = "https://techhk.aoscdn.com"
import axios from 'axios'

export const ApiEnhanced = async (file) => {

    
    try {
         
         const taskId =await uploadImage(file)
         console.log("Image Upload Sucessfully",taskId);

         const enhaceImageData = await fetchInhacedImage(taskId)
         console.log(enhaceImageData);
         
         
         

    } catch (error) {
        console.log(error.message);
        
    }
     
}


const uploadImage = async (file)=>{
    const formData = new FormData()
    formData.append("image_file" , file)
    
   const {data} = await axios.post("https://techhk.aoscdn.com/api/tasks/visual/scale", formData ,{
        headers :{
            "Content-Type" : "multipart/form-data",
            "X-API-KEY" : apikey,
        },
    })
    console.log(data);
    
}