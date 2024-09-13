import Aos from 'aos';
import React from 'react'

const ReserveButton = () => {
  Aos.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-sine",
    delay: 5000,
  });
  return (
    <>
       <div data-aos="flip-right"  style={{marginTop:"80px"}} className='container'>
        
        <center>
            <button  className='button'>Reserve Table Online</button>
            </center> 
      </div>
    </>
  )
}

export default ReserveButton
