import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/storeContext'
import FoodItem from '../FoodItem/FoodItem'
function FoodDisplay({category}) {
    const {foodList} = useContext(StoreContext)
  return (
    <div className='fooddisplay-section' id='fooddisplay-section'>
        <div className='foodDisplay-title'>
            <h1>Top dishes near you.</h1>
      
        </div>
        <div className='food-list-display'>
            {foodList.map((food,i)=>{
                if(category === "All" || category === food.category){
                    return(
                        <FoodItem key={i} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image}/>
                    )
                }
                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay