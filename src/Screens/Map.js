import Aos from 'aos';
import React from 'react'

const Map = () => {
    Aos.init({
        offset: 200,
        duration: 1000,
        easing: "ease-in-sine",
        delay: 100,
      });
  return (
    <>
      <center>
      <div data-aos="zoom-out"  style={{marginTop:"50px"}} className='container'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13603.506576809872!2d74.33801715541989!3d31.527547800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190456c0cc4d35%3A0x77ff0e21779036ff!2sZiafat!5e0!3m2!1sen!2s!4v1726232508044!5m2!1sen!2s" className='map'    loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

      </div>
      </center>
    </>
  )
}

export default Map
