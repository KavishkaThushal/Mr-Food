import React from 'react'
import './Home.css'
import Video from '../../assets/video.mp4'
function Home() {
  return (
    <div>
      <div className='header-hero'>
      <video className='video' autoPlay muted loop id="myVideo" src={Video}/>
      <div className='hero-content'>
      <h1>Order your <br/> favourite food here. </h1>
      <p>Craving something delicious? You've come to the right place. We make amazing food you won't find anywhere else, delivered fresh to your door.Skip the generic menus. Here, you'll discover unique and mouthwatering dishes made fresh in our kitchen. Order now and experience the difference!</p>
      <button className='hero-btn'>View Menu</button>
      </div>
      
      </div>
    </div>
  )
}

export default Home