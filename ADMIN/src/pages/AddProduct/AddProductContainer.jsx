import React, { useState } from 'react'
import AddProduct from './AddProduct'



const AddProductContainer = () => {
  const [images, setimages] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
  });
  return (
    <AddProduct images={images} setimages={setimages}/>
  )
}

export default AddProductContainer
