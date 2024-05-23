import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './Verify.css'
import axios from 'axios'

function Verify() {
    const [searchParams,setSearchParams]=useSearchParams()
    const success=searchParams.get('success')
    const orderId=searchParams.get('orderId')
    const navigate=useNavigate()

    useEffect(()=>{
        verifyPayment()
    },[])

    const verifyPayment=async()=>{
        try {
            const response=await axios.post('http://localhost:7001/api/order/order-verify',{
                success,
                orderId
            })
            if(response.data.success===true){
                navigate('/myorders')
            }else{
                navigate('/')
            }
        } catch (error) {
            
        }
    }

  return (
    <div className='verify'>
        <div className='spinner'></div>
    </div>
  )
}

export default Verify