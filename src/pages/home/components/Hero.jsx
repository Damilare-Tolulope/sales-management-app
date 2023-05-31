/** @format */

import React from "react";
import "../Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    width: 700,
    autoplay: true,
    autoplaySpeed: 2500,
    vertical: true,
  };
  const mobileSettings = {
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    width: 700,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="hero-bg justify-center items-center h-screen flex">
      <div className="w-full">
        <div className="pb-8">
          <div className="lg:block hidden">
            <Slider
              {...settings}
              className="lg:block hidden md:h-[130px] h-0 w-full"
            >
              <h1 className="hero-head-text text-white text-[57px] font-[400] text-center pt-8 ">
                Track Your Sales Seamlessly
              </h1>
              <h1 className="hero-head-text text-[57px] font-[400] text-center pt-8 text-[#D8E6F8]">
                Manage inventory effortlessly
              </h1>
              <h1 className="hero-head-text text-[#FFB472] text-[57px] font-[400] text-center pt-8 ">
                Record your sales efficiently
              </h1>
            </Slider>
          </div>
          <div className="block lg:hidden ">
            <Slider {...mobileSettings} className="w-full">
              <h1 className="hero-head-text text-white text-[57px] font-[400] text-center pt-8 ">
                Track Your Sales Seamlessly
              </h1>
              <h1 className="hero-head-text text-[57px] font-[400] text-center pt-8 text-[#D8E6F8]">
                Manage inventory effortlessly
              </h1>
              <h1 className="hero-head-text text-[#FFB472] text-[57px] font-[400] text-center pt-8 ">
                Record your sales efficiently
              </h1>
            </Slider>
          </div>

          <p className="hero-detail-text text-white text-[24px] font-[400] text-center py-4 ">
            MSF sales is a one-stop platform for users who want to <br></br>
            seamlessly and efficiently manage their sales and take into
            <br></br> account their inventory.
          </p>
        </div>
        <div className="text-center">
          <button className="m-auto bg-[#0052CC] text-white text-lg py-3 px-9 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
