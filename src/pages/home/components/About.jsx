/** @format */

import React from "react";
import "../Home.css";
import AboutImage from "../../../assets/images/aboutimage.png";

function About() {
  return (
    <div className="aboutus bg-[#DEE1E5]">
      <div className="px-[60px] py-8 flex gap-[5%] items-center md:flex-row flex-col ">
        <div className=" md:max-w-[45%]">
          <h6 className="text-[#0052CC] font-bold text-[16px]">ABOUT US</h6>
          <h6 className="py-4 font-bold text-[35px] text-[#3C4652]">
            Your Ultimate Sales Manager
          </h6>
          <hr className="bg-[#0052CC] max-w-[52px] font-bold h-[4px]" />
          <p className="py-8 text-[#7F7F7F] text-[24px] font-[400]">
            A one-stop platform for users who want to seamlessly manage their
            sales and take into account their inventory
          </p>
          <button className="w-[130px] h-[45px] px-[16px]  bg-[#0052CC] rounded-[8px] text-[#FFFFFF]">
            Read more
          </button>
        </div>
        <img
          src={AboutImage}
          className="md:max-w-[50%] max-h-[50%] py-8"
          alt="Computer"
        />
      </div>
    </div>
  );
}

export default About;
