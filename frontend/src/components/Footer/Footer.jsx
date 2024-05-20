import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import { FaFacebook,FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <div className='footer-section' id='footer-section'>
    <div className='footer-content'>
        <div className='footer-left'>
           <img src={Logo} alt='logo' className='footer-logo' />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non, ea aut fugiat quis eligendi alias ipsa, sed inventore minus veniam aliquam. Tenetur blanditiis nihil corrupti itaque nemo voluptatum possimus.</p>
           <span className='footer-social-icon'>
           <FaFacebook/>
           <FaXTwitter/>
            <FaLinkedin/>
           </span>
           
        </div>

        <div className='footer-center'>
            <h1>COMPANY</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>    
        </div>

        <div className='footer-right'>
            <h1>GET IN TOUCH</h1>
            <ul>
                <li>1234 Street Name, Colombo, Sri Lanka</li>
                <li>+94572200935</li>
                <li>+94573423106</li>
                <li>mrfood@gmail.com</li>
            </ul>    

        </div>
        
    </div>
    <hr className='footer-line'/>
    <p className='footer-copyright'>Copyright 2024 &copy; Kavishka Thushal-All rights reserved</p>
    </div>
  )
}

export default Footer