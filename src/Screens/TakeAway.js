import Aos from 'aos';
import React from 'react'
const TakeAway = () => {
  Aos.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
      <div data-aos="flip-left" style={{marginTop:"100px"}} className='container'>
        <p className='takeaway'>TAKEAWAY MENU</p>
        <center><img className='image' src="Photos/pic3.jpg"/></center> 
      </div> 
    </>
  )
}

export default TakeAway
