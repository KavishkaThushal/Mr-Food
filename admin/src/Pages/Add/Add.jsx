import React, { useRef, useState } from 'react'
import './Add.css'
import Upload from '../../assets/upload.jpg'
function Add() {
  const imageRef = useRef()
  const [image, setImage] = useState('')
  return (
    <div className='Add-container'>
      <div className='img-uploader'>
        <label htmlFor='img-uploder'>Upload Image</label>
        <img onClick={()=>(imageRef.current.click())} src={image? URL.createObjectURL(image) : Upload} alt='upload' />
        <input onChange={(e)=>(setImage(e.target.files[0]))} id='img-uploder' ref={imageRef} type='file'  hidden required />
      </div>
      <span className='product-name'>
        <label>Product Name</label>
        <input type='text' required placeholder='Type here'/>
      </span>
      <span className='text-field'>
        <label>Product Name</label>
        <textarea type='text' rows='6' required  placeholder='Write content here'/>
      </span>
      <span className='last-row'>
        <span className='category-container'>
          <label>Product Category</label>
          <select name='category'>
            <option value=''>Select Category</option>
            <option value='Salad'>Salad</option>
            <option value='Rolls'>Rolls</option>
            <option value='Deserts'>Deserts</option>
            <option value='Sandwich'>SandwiCakech</option>
            <option value='Cake'>Cake</option>
            <option value='Pure Veg'>Pure Veg</option>
            <option value='Pasta'>Pasta</option>
            <option value='Noodles'>Noodles</option>
          
            
          </select>
        </span>

        <span className='price-container'>
          <label>Product Price</label>
          <input type='number' required placeholder='$' />
        </span>
      </span>
      <button className='add-btn'>Add Product</button>

    </div>
  )
}

export default Add