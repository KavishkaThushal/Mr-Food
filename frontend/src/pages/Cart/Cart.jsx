import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom'
function Cart() {
   const navigate=useNavigate()
      
        const {cardItems,removeFromCart,foodList,getTotalAmount} =useContext(StoreContext)
       const subTotal=getTotalAmount();
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
                            <img src={`http://localhost:7001/images/${item.image}`} alt={item.name} />
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
  
        <div className='cart-bottom'>
            <div className='cart-total'>
                <h3>Cart Totals</h3>
                <div className='cart-content'>
                    <span className='cart-total-details'>
                        <p>SubTotal</p>
                        <p>Rs.{subTotal}.00</p>
                    </span>
                    <hr/>
                    <span className='cart-total-details'>
                        <p>Delivery fee</p>
                        <p>Rs.{0}.00</p>
                    </span>
                    <hr/>
                    <span className='cart-total-details'>
                        <p>Total</p>
                        <p>Rs.{0}.00</p>
                    </span>
                  
                    <button onClick={()=>(navigate('/order'))} className='cart-checkout'>Checkout</button>
                </div>
            </div>

            

        </div>

    </div>
  )
}

export default Cart