import React, { useState } from 'react'
import './MenuExplore.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { menuImg } from '../../assets/data'
function MenuExplore({category,setCategory}) {
  const [menu,setMenu] = useState('')
  const slidersettings = {
    slidesPerView : 1,
    spaceBetween : 10,
    breakpoints : {
        360:{
          slidesPerView: 2
        },
        480 : {
            slidesPerView: 3
        },
        600 : {
            slidesPerView: 3
        },
        750 : {
            slidesPerView: 5
        },
        1100 : {
            slidesPerView: 8
        }

    }
}
  return (
    <div className='menu-section'>
        <div className='menu-title'>
            <h1>Explore our menu</h1>
            <p>Choose from the diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience.One delicious meat at time.</p>
        </div>
        <div className='menu-cards'>
        <Swiper className='s-swiper' slidesPerView={slidersettings.slidesPerView} spaceBetween={slidersettings.spaceBetween} breakpoints={slidersettings.breakpoints}>
                
                {menuImg.map((card,i)=>{
            return (<SwiperSlide key={i}>
              <span key={i} onClick={()=>(setCategory(prev=>prev===card.name? "All":card.name))} className='menu-card'>
              <img onClick={()=>(setMenu(card.name))} className={menu===card.name? 'active':''} src={card.img} alt='card-img'/>
              <h1>{card.name}</h1>
           </span>
           </SwiperSlide>)
          })}              
                </Swiper> 
          
           
        </div>
      <hr/>
    </div>
  )
}

export default MenuExplore