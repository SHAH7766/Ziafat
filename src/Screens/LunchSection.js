import Aos from 'aos';
import React from 'react'

const LunchSection = () => {
  Aos.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <>
      <div data-aos="fade-left" style={{marginTop:"100px"}} className='container'>
        <p className='lunch '>Lunch Cum Hi-Tea Menu</p>
       <center><img className='image' src="Photos/pic2.jpg"/></center> 
      </div>
    </>
  )
}

export default LunchSection
