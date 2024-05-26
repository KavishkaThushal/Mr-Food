import React, { useState } from 'react'
import './Home.css'
import Video from '../../assets/video.mp4'
import MenuExplore from '../../components/MenuExplore/MenuExplore'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import {motion} from 'framer-motion'
function Home() {
  const [category,setCategory] = useState("All")

  return (
    <div>
      <div className='header-hero'>
      <video className='video' autoPlay muted loop id="myVideo" src={Video}/>
      <div className='hero-content'>
      <motion.h1 
      initial={{y: "2rem",opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{
        duration:2,
        type:"spring"
      }}
      
      >Order your <br/> favourite food here. </motion.h1>
      <p>Craving something delicious? You've come to the right place. We make amazing food you won't find anywhere else, delivered fresh to your door.Skip the generic menus. Here, you'll discover unique and mouthwatering dishes made fresh in our kitchen. Order now and experience the difference!</p>
      <button className='hero-btn'>View Menu</button>
      </div>
      
      </div>
      <MenuExplore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      
    </div>
  )
}

export default Home