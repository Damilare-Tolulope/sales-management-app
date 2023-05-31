import React from "react";

const DashboardBottom = () => {
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center mt-[60px] sm:mt-[31px] ">
        <p
          className="flex justify-center items-center mt-[31px] 
			mb-[11px] text-[#3C4652] font-[600] leading-[22px] text-[18px]"
        >
          Page 1 of 32
        </p>
        <div className=" xs:mb-[20px] flex justify-center items-center row ">
          <button
            className="h-[52px] w-[121px] bg-[#0052CC] font-[18px]
				 leading-[22px] font-[600] rounded-l-[10px] text-white"
          >
            Previous
          </button>
          <span
            className="h-[52px] w-[50px] leading-[22px]
				 bg-[#0C1A2C] flex justify-center items-center font-[18px] font-[600]
				  text-white"
          >
            1
          </span>
          <button
            className="h-[52px] w-[83px] leading-[22px]
				   font-[18px] font-[600] bg-[#0052CC] rounded-r-[10px] text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardBottom;
