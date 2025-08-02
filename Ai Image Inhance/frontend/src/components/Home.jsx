import React, { useActionState, useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
const Home = () => {
  const [upload , setUpload] = useState(null)
  const [enhanced , setInhanced ] = useState(null)
  const [loading , setLoading] = useState(false)
  return (
    <div>
      <ImageUpload/>
      <ImagePreview/>
    </div>
  )
}

export default Home
