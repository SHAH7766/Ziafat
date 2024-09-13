import Aos from 'aos';
import React from 'react'

const OneDishMenu = () => {
  Aos.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
       <div data-aos="fade-down" style={{marginTop:"100px"}} className='container'>
        <p className='onedishmenu'>One Dish Menu</p>
        <center><img className='image' src="Photos/pic4.jpg"/></center> 
      </div> 
    </>
  )
}

export default OneDishMenu
