import { useState } from "react";
import nature from "../assets/video/main.mp4";
import Banner from "../components/Banner/Banner";
import BannerImg from "../components/BannerImg/BannerImg";
import Hero from "../components/Hero/Hero";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import BlogsPage from "./BlogsPage";
import Popup from "../components/Popup/Popup";

const HomePage = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={nature} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerImg />
        <BlogsPage />
        <Banner />
        <Testimonial />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      </div>
    </>
  );
};

export default HomePage;
