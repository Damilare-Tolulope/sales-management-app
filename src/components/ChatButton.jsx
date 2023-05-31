import React from "react";
import Helpcircle from "../assets/images/dashboard/bx_help-circle.png";

const ChatButton = ({ handleDrawerOpen }) => {
  return (
    <div>
      <div
        className="mt-[20px] w-full flex items-center 
			 pr-[30px] sm:pr-[0] flex-row-reverse"
      >
        <button
          className=" flex justify-center items-center
				text-white leading-[24px] w-[122px] h-[48px]
				bg-[#0052CC] text-[18px] font-[600]
				rounded-[24px]"
          onClick={handleDrawerOpen}
        >
          <img
            src={Helpcircle}
            className="w-[25px] h-[25px] mr-[11.5px]"
            alt="help"
          />{" "}
          Help
        </button>
      </div>
    </div>
  );
};

export default ChatButton;
