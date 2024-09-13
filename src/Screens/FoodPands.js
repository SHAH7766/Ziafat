import Aos from 'aos';
import React from 'react'
const FoodPands = () => {
  Aos.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
       <div data-aos="fade-up" style={{marginTop:"100px"}} className='container'>
        <p className='panda'>Order Ziafat Food Online on FoodPanda!</p>
        <center><img className='image' src="Photos/pic5.jpg"/></center>
            
        </div>
    </>
  )
}

export default FoodPands
