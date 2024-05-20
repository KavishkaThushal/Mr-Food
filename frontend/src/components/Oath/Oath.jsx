import React from 'react'
import './Oath.css'
import googleImg from '../../assets/google.png'
function Oath() {
  return (
    <>
     <button className='oath-btn'><img src={googleImg} alt='google-icon'/>Continue with Google</button>
    </>
  )
}

export default Oath