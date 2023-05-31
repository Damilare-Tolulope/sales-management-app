import React from "react";
import IserviceImg from "../../../assets/images/serviceImg.png";
import "../Services.css";

const ServiceHeading = () => {
  return (
    <div className="flex">
      <div className="head-text mt-40 mx-20">
        <h6 className=" text-[45px] text-[#0052CC] font-[400]">
          We have everything <br></br> you need
        </h6>
        <p className="text-[24px] font-[400]">
          Seamlessly manage your sales, stock <br></br> and inventory
        </p>
      </div>
      <div className="my-10 ">
        <img className="" src={IserviceImg} alt="" />
      </div>
    </div>
  );
};

export default ServiceHeading;
