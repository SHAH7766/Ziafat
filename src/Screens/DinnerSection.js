import Aos from "aos";
import React from "react";

const DinnerSection = () => {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <>
      <div data-aos="fade-up" style={{ marginTop: "100px" }} className="container">
        <p className="dinner">Dinner Buffet Menu</p>
        <center>
          <img className="image" src="Photos/pic1.jpg" />
        </center>
      </div>
    </>
  );
};

export default DinnerSection;
