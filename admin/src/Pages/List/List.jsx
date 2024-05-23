import React, { useEffect, useState } from 'react'
import './List.css'
import {toast} from 'react-toastify'
import axios from 'axios'
function List() {
     const [foodList,setFoodList] = useState([])

     const fetchFoodList=async()=>{
      try {
        const response=await axios.get('http://localhost:7001/api/food/show-list')
        if(response.data.success ===true){
        
          setFoodList(response.data.data)
        }
      } catch (error) {
        console.log(error);
        toast.error('Error')
      }
     }

     useEffect(()=>{
      fetchFoodList()
     },[])

     const handleRemoveItem = async (id) => {
      console.log('Removing item with ID:', id);
      try {
        const response = await axios.post(`http://localhost:7001/api/food/remove-list/${id}`);
        console.log('Response from server:', response);
        if (response.data.success === true) {
          toast.success('Item removed');
          await fetchFoodList();
        } else {
          toast.error('Failed to remove item');
        }
      } catch (error) {
        console.error('Error removing item:', error.response ? error.response.data : error.message);
        toast.error('Error removing item');
      }
    };

  return (
    <div className='list-container'>
        <div className='list-title'>
            <h3>Image</h3>
            <h3>Name</h3>
            <h3>Category</h3>
            <h3>Price</h3>
            <h3>Action</h3>
        </div>
        {foodList.map((food,index)=>{
          return(
            <div className='food-list-items' key={index}>
                <img src={`http://localhost:7001/images/${food.image}`} alt='food-img' />
                <h3>{food.name}</h3>
                <h3>{food.category}</h3>
                <h3>Rs.{food.price}.00</h3>
                <h3 className='action-close' onClick={()=>(handleRemoveItem(food._id))}>X</h3>
            </div>
          )
        })}

    </div>
  )
}

export default List