import React from "react";
import DinnerSection from "./DinnerSection";
import LunchSection from "./LunchSection";
import TakeAway from "./TakeAway";
import OneDishMenu from "./OneDishMenu";
import ReserveButton from "./ReserveButton";
import FoodPands from "./FoodPands";
import Map from "./Map";
import Slider from "../Components/Slider";

const Buffet = () => {
  return (
    <>
      <Slider />
      <div style={{ marginTop: "70px" }} className="container">
        <p className="buffet">BEST BUFFET IN LAHORE!</p>

        <p className="para1">
          Ziafat Restaurant Lahore is a premium dining establishment that has
          been serving customers for many years. Located in the heart of Lahore,
          our restaurant offers a wide variety of dishes that cater to the
          diverse tastes of our customers. Our chefs are highly skilled and use
          only the freshest ingredients to prepare each dish, ensuring that
          every meal is of the highest quality. The Best Buffet in Lahore you
          will find in Ziafat offers you food with hygiene, taste, and
          tradition.{" "}
        </p>
        <p className="para1 mt-3">
          Whether you’re looking for a quiet dinner with your loved ones, a
          celebratory meal with friends, or a corporate event, Ziafat Restaurant
          Lahore has got you covered. We take great pride in providing
          exceptional service and delicious food that will leave a lasting
          impression on you. Come and experience the culinary delights of Ziafat
          Restaurant Lahore, where every bite is a feast for the senses.
        </p>
      </div>

      <DinnerSection />
      <LunchSection />
      <TakeAway />
      <OneDishMenu />
      <ReserveButton />
      <FoodPands />
      <Map />
    </>
  );
};

export default Buffet;
