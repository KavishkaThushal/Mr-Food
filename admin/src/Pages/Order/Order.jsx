import React from 'react'
import './Order.css'
import { useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useEffect } from 'react'
import Box from '../../assets/box.png'
function Order() {
  const [data,setData]=useState("")

  const dataFetch=async()=>{
    try {
      const response=await axios.get('http://localhost:7001/api/order/allorders',)
      if(response.data.success===true){
        setData(response.data.data)
      }
        
      
    } catch (error) {
      toast.error("Error")
      console.log(error);
    }
  }

  useEffect(()=>{
    dataFetch()
    },[])

  const handleUpdateStatus=async(e,id)=>{
  
   try {
    const response=await axios.post(`http://localhost:7001/api/order/update-status/${id}`,{
      status:e.target.value
    })
    if(response.data.success===true){
      
      toast.success("Status Updated")
      await dataFetch()
    }
   } catch (error) {
    toast.error("Error")
   }
  }

  


  return (
    <div className='order-container'>
      <h2>Order Page</h2>
      
        {data && data.map((order,i)=>{
          return(
            <div key={i} className='order'>
              <img src={Box} alt='box' className='box'/>
              <span className='order-user-details'>
              <p>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name+" x "+item.quantity
                        }else{
                            return item.name+" x "+item.quantity+", "
                        }
                    })}</p>
              <p>{`${order.address.firstName} ${order.address.lastName}`}</p>   
              <p>{`${order.address.street},${order.address.city},${order.address.state},${order.address.country}`}</p>   
              </span>
              <p>Items:{order.items.length}</p>
              <p>Rs.{order.amount}.00</p>
              <select onChange={(e)=>(handleUpdateStatus(e,order._id))} className='order-status' value={order.status} >
                <option value="Pending">Pending</option>
                <option value="Deliverd">Deliverd</option>
                <option value="Out for Delivery">Out for Delivery</option>
              </select>
            </div>
          )
        })}
      </div>
    
  )
}

export default Order