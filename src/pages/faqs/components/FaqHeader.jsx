import React from "react";
import SearchIcon from "../../../assets/images/dashboard/searchIcon.png";

const FaqHeader = () => {
  return (
    <div className="head-text text-center bg-[#0052CC] h-[500px]">
      <div className="pt-20">
        <h6 className="font-[400] text-24px text-[#FCFCFC] pb-10">FAQs</h6>
        <h6 className="faq-header-subtitle text-[32px] font-[400] text-[#FCFCFC] pb-8">
          Any Confusion? Ask Us Anything
        </h6>
        <h6 className="font-[400] text-[24px] text-[#FCFCFC] pb-8">
          We are here to assist you anytime{" "}
        </h6>
      </div>
      <div className="flex justify-center items-center">
        <div
          className=" flex items-center 
				pl-[12px] rounded-[8px] py-[18px]
				w-[65%] sm:w-[310px] ml-[20px]  sm:ml-[0]
				pr-[20px] sm:pr-[0]
				 h-[48px] border-[1.5px] 
				border-[grey] focus:outline-none"
        >
          <img
            src={SearchIcon}
            className="w-[18px] h-[18px]  
						"
            alt="search"
          />
          <input
            type="search"
            className="bg-transparent border-0 w-[60%] sm:w-[288px] 
						focus:ring-none focus:outline-none
						focus:border-0 focus:ring-transparent 
						outline-none leading-[24px]  
						text-[#FCFCFC] text-[14px] sm:text-[16px] font-[400]"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default FaqHeader;
