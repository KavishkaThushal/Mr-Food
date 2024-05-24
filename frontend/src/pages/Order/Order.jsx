import React, { useContext, useEffect, useState } from 'react'
import './Order.css'
import { StoreContext } from '../../context/storeContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Order() {
    const {foodList,cardItems,getTotalAmount}=useContext(StoreContext)
    const token=localStorage.getItem('token')
    const navigate=useNavigate()
    const totalAmount=getTotalAmount()
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipCode:"",
        country:"",
        phone:"",


    })
   
    const handleChange=(e)=>{
        setFormData((prev=>({...prev,[e.target.name]:[e.target.value]})))
    }

     const placeOrder=async(e)=>{
        e.preventDefault()
        let orderItems=[]
        foodList.map((item)=>{
            if(cardItems[item._id]>0){
                let info=item
                info["quantity"]=cardItems[item._id]
                orderItems.push(info)
            }
        })

        let orderData={
            address:formData,
            items:orderItems,
            amount:totalAmount+200
        }
        try {
            let response=await axios.post('http://localhost:7001/api/order/place-order',orderData,{
                headers:{
                    authorization:localStorage.getItem('token')
                }
            })
            if(response.data.success===true){
             
                const {session_url}=response.data
                window.location.replace(session_url)
         }else{
            alert("")
         }
        } catch (error) {
            console.log(error);
        }
       
    }

    useEffect(() => {
      return () => {
        effect
      };
    }, [input]);(()=>{
            if(!token){
               navigate('/cart')
            }else if(totalAmount===0){
                navigate('/cart')
            }
    },[token])
           
  return (
    <form onSubmit={placeOrder} className='order-section'>
        <div className='order-details'>
            <h3>Delivery Information</h3>
            <div className='order-details-content'>
                <span>
                    <input type='text' name='firstName' onChange={handleChange} value={formData.firstName}    placeholder='First Name' required/>
                    <input type='text' name='lastName' onChange={handleChange} value={formData.lastName} placeholder='Last Name' required/>
                </span>
                <input type='text' name='email' onChange={handleChange} value={formData.email} placeholder='Email Address' required/>
                <input type='text' name='street' onChange={handleChange} value={formData.street} placeholder='Street' required/>
                <span>
                    <input type='text' name='city' onChange={handleChange} value={formData.city} placeholder='City' required/>
                    <input type='text' name='state' onChange={handleChange} value={formData.state} placeholder='State' required/>
                </span>
                <span>
                    <input type='text' name='zipCode' onChange={handleChange} value={formData.zipCode} placeholder='Zip Code' required/>
                    <input type='text' name='country' onChange={handleChange} value={formData.country} placeholder='Country' required/>
                </span>
                <input type='text' name='phone' onChange={handleChange} value={formData.phone} placeholder='Phone ' required/>
            </div>
        </div>

       
        <div className='order-total-details'>
            <div className='cart-total'>
                <h3>Cart Totals</h3>
                <div className='cart-content'>
                    <span className='cart-total-details'>
                        <p>SubTotal</p>
                        <p>Rs.{totalAmount}.00</p>
                    </span>
                    <hr/>
                    <span className='cart-total-details'>
                        <p>Delivery fee</p>
                        <p>Rs.{200}.00</p>
                    </span>
                    <hr/>
                    <span className='cart-total-details'>
                        <p>Total</p>
                        <p>Rs.{totalAmount+200}.00</p>
                    </span>
                  
                    <button type='submit' className='cart-checkout'>Proceed to Payment</button>
                </div>
            </div>

            

        </div>
        
    </form>

  )
}

export default Order