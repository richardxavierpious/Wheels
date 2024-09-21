import React from 'react'

function ImageGallery({carDetails}) {
  return (
    <div>
        <img src= {carDetails?.images[0].imageUrl} className='object-cover w-full h-[500px] rounded-xl'/>
    </div>
  )
}

export default ImageGallery