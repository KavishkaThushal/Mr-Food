import React, { useState } from 'react'
import './Navbar.css'
import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../../assets/logo.png'
function Navbar() {
  const [menu,setMenu] = useState('')
  const [menuShow,setMenuShow] = useState(false)
  return (
   <div className='nav-bar'>
    <img src={Logo} alt='logo' className='logo' />

    <ul className='nav-menu'>
      
        <li onClick={()=>(setMenu('home'))} className={menu==='home'? 'active':''}>HOME</li>
        <li onClick={()=>(setMenu('menu'))} className={menu==='menu'? 'active':''}>MENU</li>
        <li onClick={()=>(setMenu('mobile-app'))} className={menu==='mobile-app'? 'active':''}>MOBILE-APP</li>
        <li onClick={()=>(setMenu('contact'))} className={menu==='contact'? 'active':''}>CONTACT US</li>
      
    </ul>

    <div className='nav-right'>
    
     <FiSearch  /> 
     <FiShoppingCart  /> 
     <button className='sign-btn'>SIGN IN</button>
     <RxHamburgerMenu className='menu-icon' onClick={()=>(setMenuShow(!menuShow))}/>
    </div>

    {menuShow? <div className='toggle-navbar'>
    <ul className='toggle-nav-menu'>
      
      <li onClick={()=>(setMenu('home'))} className={menu==='home'? 'active':''}>HOME</li>
      <li onClick={()=>(setMenu('menu'))} className={menu==='menu'? 'active':''}>MENU</li>
      <li onClick={()=>(setMenu('mobile-app'))} className={menu==='mobile-app'? 'active':''}>MOBILE-APP</li>
      <li onClick={()=>(setMenu('contact'))} className={menu==='contact'? 'active':''}>CONTACT US</li>
    
  </ul>
  <button className='toggle-sign-btn'>SIGN IN</button>

    </div>:''}
   </div>
  )
}

export default Navbar