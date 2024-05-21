import React from 'react'
import './Order.css'
function Order() {
  return (
    <div className='order-section'>
        <div className='order-details'>
            <h3>Delivery Information</h3>
            <div className='order-details-content'>
                <span>
                    <input type='text' placeholder='First Name'/>
                    <input type='text' placeholder='Last Name'/>
                </span>
                <input type='text' placeholder='Email Address'/>
                <input type='text' placeholder='Street'/>
                <span>
                    <input type='text' placeholder='City'/>
                    <input type='text' placeholder='State'/>
                </span>
                <span>
                    <input type='text' placeholder='Zip Code'/>
                    <input type='text' placeholder='Country'/>
                </span>
                <input type='text' placeholder='Phone '/>
            </div>
        </div>

       
        <div className='order-total-details'>
            <div className='cart-total'>
                <h3>Cart Totals</h3>
                <div className='cart-content'>
                    <span className='cart-total-details'>
                        <p>SubTotal</p>
                        <p>Rs.{0}.00</p>
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
                  
                    <button className='cart-checkout'>Proceed to Payment</button>
                </div>
            </div>

            

        </div>
        
    </div>

  )
}

export default Order