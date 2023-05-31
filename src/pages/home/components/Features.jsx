/** @format */

import React from "react";
import ServicesCards from "../../../components/ServicesCards";

const Features = () => {
  return (
    <div className=" w-full flex justify-center items-center flex-col">
      <h1 className="align-center mt-[50px] font-semibold text-[#0052CC] text-sm">
        FEATURES
      </h1>
      <h1 className="py-4 font-bold md:text-[30px] text-lg text-[#3C4652]">
        Discover Our Services
      </h1>
      <div className="bg-[#0052CC] w-[48px] mt-[15px] font-bold h-[4px] flex justify-center items-center flex-col"></div>
      <ServicesCards />
    </div>
  );
};

export default Features;
