import React, { useState } from 'react'
import './SignPopUp.css'
import { IoClose } from "react-icons/io5";
import Oath from '../Oath/Oath';
function SignPopUp({setSignPopUp}) {
      const [accontUserState,setAccountUserState] = useState('sign-in')

  return (
    <div className='popup-container'>
        <div className='popup-box'>
        <IoClose className='close-icon' onClick={()=>(setSignPopUp(false))}/>
        {accontUserState==='sign-in'? <h1>Sign in</h1>:<h1>Sign up</h1>}
        {accontUserState==='sign-in'? <></>:<span>
            <label>Username</label>
            <input type='text' placeholder='Username'/>
        </span>}
        <span>
            <label>Email</label>
            <input type='email' placeholder='Email' required/>
        </span>
        <span>
            <label>Password</label>
            <input type='password' placeholder='Password' required/>
        </span>
        {accontUserState==='sign-in'?<button className='popup-sign-btn'>Sign in</button>:<button className='popup-sign-btn'>Create an account</button>}
        <Oath/>
        {accontUserState==='sign-in'?<p>create an account? <button className='here' onClick={()=>(setAccountUserState('sign-up'))}>Click here</button></p>:<p>already have an account? <button className='here' onClick={()=>(setAccountUserState('sign-in'))}>Login here</button></p>}
        
        
        
        
        
        </div>
        
    </div>
  )
}

export default SignPopUp