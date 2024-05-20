import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FiSearch,FiShoppingCart  } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
function Navbar({setSignPopUp}) {
  const [menu,setMenu] = useState('')
  const [menuShow,setMenuShow] = useState(false)
  const navigate=useNavigate()
  const {cardItems}=useContext(StoreContext)
  console.log(cardItems);
  return (
   <div className='nav-bar'>
    <img src={Logo} alt='logo' className='logo' />

    <ul className='nav-menu'>
      
        <Link to='/' onClick={()=>(setMenu('home'))} className={menu==='home'? 'active':''}>HOME</Link>
        <a href='#menu-section' onClick={()=>(setMenu('menu'))} className={menu==='menu'? 'active':''}>MENU</a>
        
        <a href='#footer-section' onClick={()=>(setMenu('contact'))} className={menu==='contact'? 'active':''}>CONTACT US</a>
      
    </ul>

    <div className='nav-right'>
    
     <FiSearch  /> 
     <FiShoppingCart onClick={()=>(navigate('/cart'))} /> 
     {Object.values(cardItems).map((value,i)=>(value>0? <div className='notification-dot'/>:null))}
     <button onClick={()=>(setSignPopUp(true))} className='sign-btn'>SIGN IN</button>
     <RxHamburgerMenu className='menu-icon' onClick={()=>(setMenuShow(!menuShow))}/>
    </div>

    {menuShow? <div className='toggle-navbar'>
    <ul className='toggle-nav-menu'>
      
      <li onClick={()=>(setMenu('home'))} className={menu==='home'? 'active':''}>HOME</li>
      <a href='#menu-section' onClick={()=>(setMenu('menu'))} className={menu==='menu'? 'active':''}>MENU</a>
      
      <a href='#footer-section' onClick={()=>(setMenu('contact'))} className={menu==='contact'? 'active':''}>CONTACT US</a>
    
  </ul>
  <button onClick={()=>(setSignPopUp(true))} className='toggle-sign-btn'>SIGN IN</button>

    </div>:''}
   </div>
  )
}

export default Navbar