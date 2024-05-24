import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { FaPlus,FaMinus } from "react-icons/fa";
import { StoreContext } from '../../context/storeContext';
function FoodItem({id,name,description,price,image}) {
    
    const {cardItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-card'>
        <div className='food-img'>
            <img src={`http://localhost:7001/images/${image}`} alt={name}/>
        </div>
        <div className='food-content'>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>Rs.{price}.00</h4>
            
        </div>
        <span className='plus-container'>
            {!cardItems[id] ? <button onClick={()=>addToCart(id)} className='main-plus'><FaPlus/></button> : 
            <span className='plus-minus-con'>
                <button onClick={()=>removeFromCart(id)} className='minus'><FaMinus/></button>
                <span>{cardItems[id]}</span>
                <button onClick={()=>addToCart(id)} className='plus'><FaPlus/></button>
            </span>}
        </span>

    </div>
  )
}

export default FoodItem