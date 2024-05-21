import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import User from '../../assets/user.jpg'

function Navbar() {
  return (
    <div className='nav-container'>
        <img src={Logo} alt='logo' className='logo'/>
        <h1 className='title'>Admin Panel</h1>
        <img src={User} alt='user-img' className='profile-img'/>

    </div>
  )
}

export default Navbar