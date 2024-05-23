import React, { useContext, useState } from 'react'
import './SignPopUp.css'
import { IoClose } from "react-icons/io5"
import Oath from '../Oath/Oath'
import {toast} from 'react-toastify'
import axios from 'axios'
import { StoreContext } from '../../context/storeContext'
function SignPopUp({setSignPopUp}) {
      const [accontUserState,setAccountUserState] = useState('sign-in')
      const [formData,setFormData] = useState({})
      const {setToken} = useContext(StoreContext)

      const handleChange = (e) => {
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
      }

      const handleRegister=async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:7001/api/user/register',{
                userName:formData.name,
                email:formData.email,
                password:formData.password

            })
            if(response.data.success===true){
                toast.success('Account created successfully')
                setToken(response.data.token)
                setSignPopUp(false)
                localStorage.setItem('token',response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(response.data.message)
        }
      }


      const handleLogin=async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:7001/api/user/login',{
               
                email:formData.email,
                password:formData.password

            })
            if(response.data.success===true){
                toast.success('Login successfully')
                setToken(response.data.token)
                setSignPopUp(false)
                localStorage.setItem('token',response.data.token)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(response.data.message)
        }
      }

  return (
    <div className='popup-container'>
        <div className='popup-box'>
        <IoClose className='close-icon' onClick={()=>(setSignPopUp(false))}/>
        {accontUserState==='sign-in'? <h1>Sign in</h1>:<h1>Sign up</h1>}
        {accontUserState==='sign-in'? <></>:<span>
            <label>Username</label>
            <input type='text' placeholder='Username' name='name' onChange={handleChange}/>
        </span>}
        <span>
            <label>Email</label>
            <input type='email' placeholder='Email' name='email' onChange={handleChange} required/>
        </span>
        <span>
            <label>Password</label>
            <input type='password' placeholder='Password' name='password' onChange={handleChange} required/>
        </span>
        {accontUserState==='sign-in'?<button className='popup-sign-btn' onClick={handleLogin}>Sign in</button>:<button className='popup-sign-btn' onClick={handleRegister}>Create an account</button>}
        <Oath/>
        {accontUserState==='sign-in'?<p>create an account? <button className='here' onClick={()=>(setAccountUserState('sign-up'))}>Click here</button></p>:<p>already have an account? <button className='here' onClick={()=>(setAccountUserState('sign-in'))}>Login here</button></p>}
        
        
        
        
        
        </div>
        
    </div>
  )
}

export default SignPopUp