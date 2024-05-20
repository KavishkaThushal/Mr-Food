import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/storeContext'
function Cart() {

    const {cardItems,removeFromCart,foodList} =useContext(StoreContext)
  
  return (
    <div className='cart-section'>
        <div className='cart-title'>
            <h3>Items</h3>
            <h3>Title</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
            <h3>Remove</h3>
        </div>
        <hr className='cart-line'/>
        {
            foodList.map((item,i)=>{
                if(cardItems[item._id]>0){
                   
                    return(
                        <div key={i}>
                            <div className='cart-content'>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>Rs.{item.price}.00</p>
                            <p>{cardItems[item._id]}</p>
                            <p>Rs.{cardItems[item._id]*item.price}.00</p>
                            <p onClick={()=>(removeFromCart(item._id))} className='item-remover'>x</p>
                            </div>
                            <hr className='cart-line'/>
                        </div>
                    )
                }
            })
        }


    </div>
  )
}

export default Cart