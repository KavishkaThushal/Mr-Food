import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Box from '../../assets/orderbox.png'
import './MyOrders.css'
function MyOrders() {
    const [data,setData]=useState("")

    useEffect(()=>{
        fetchOrders()
    
    },[])

    const fetchOrders=async()=>{
        try {
            const response=await axios.get('http://localhost:7001/api/order/myorders',{
                headers:{
                    authorization:localStorage.getItem('token')
                }
            })
            if(response.data.success===true){
                setData(response.data.data)
            }
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error);
        
        }
    }

  return (
    <div className='myorder-container'>
        <h2>My Orders</h2>
        <div className='myorder'>
            <img src={Box} alt='box'/>
            {data && data.map((order,index)=>(
                <div className='order' key={index}>
                    <p>{order.items.map((item,index)=>{
                        if(index===order.items.length-1){
                            return item.name+" x "+item.quantity
                        }else{
                            return item.name+" x "+item.quantity+", "
                        }
                    })}</p>
                    <p>Rs.{order.amount}00</p>
                    <p>Items:{order.items.length}</p>
                    <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                    <button onClick={fetchOrders}>Track Order</button>
                    
                </div>
            ))}
        </div>

    </div>
  )
}

export default MyOrders