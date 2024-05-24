import React, { useRef, useState } from 'react'
import './Add.css'
import Upload from '../../assets/upload.jpg'
import { toast } from 'react-toastify'
import axios from 'axios'
function Add() {
  const imageRef = useRef()
  const [image, setImage] = useState(null)
  const [formData,setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: ''
  })

   const handleChange = (e) => {
    setFormData((prev)=>({...prev,[e.target.name]: e.target.value}))
   }

   const handleSubmit=async(e)=>{
      e.preventDefault()
      const data = new FormData()
      data.append('name',formData.name)
      data.append('category',formData.category)
      data.append('price',Number(formData.price))
      data.append('description',formData.description)
      data.append('image',image)

      try {
        const response=await axios.post('http://localhost:7001/api/food/add',data)
        if(response.data.success===true){
          toast.success('Product added successfully')
          setFormData({
            name: '',
            category: '',
            price: '',
            description: ''
          })
          setImage(false)
        }
      } catch (error) {
        console.log(error);
      }
   }

  return (
    <div className='Add-container'>
      <div className='img-uploader'>
        <label htmlFor='img-uploder'>Upload Image</label>
        <img onClick={()=>(imageRef.current.click())} src={image? URL.createObjectURL(image) : Upload} alt='upload' />
        <input onChange={(e)=>(setImage(e.target.files[0]))}  id='img-uploder'  ref={imageRef} type='file'  hidden required />
      </div>
      <span className='product-name'>
        <label>Product Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required placeholder='Type here'/>
      </span>
      <span className='text-field'>
        <label>Description</label>
        <textarea type='text' rows='6' value={formData.description} onChange={handleChange} name='description' required  placeholder='Write content here'/>
      </span>
      <span className='last-row'>
        <span className='category-container'>
          <label>Product Category</label>
          <select name='category' onChange={handleChange} value={formData.category} >
            <option value=''>Select Category</option>
            <option value='Salad'>Salad</option>
            <option value='Rolls'>Rolls</option>
            <option value='Deserts'>Deserts</option>
            <option value='Sandwich'>Sandwitch</option>
            <option value='Cake'>Cake</option>
            <option value='Pure Veg'>Pure Veg</option>
            <option value='Pasta'>Pasta</option>
            <option value='Noodles'>Noodles</option>
          
            
          </select>
        </span>

        <span className='price-container'>
          <label>Product Price</label>
          <input type='number' name='price' onChange={handleChange} required placeholder='Rs' value={formData.price} />
        </span>
      </span>
      <button onClick={handleSubmit} className='add-btn'>Add Product</button>

    </div>
  )
}

export default Add