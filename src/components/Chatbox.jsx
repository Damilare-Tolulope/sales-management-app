/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ProfileIcon from "../assets/images/dashboard/profile.png";

const Chatbox = ({ handleDrawerOpen, open }) => {
  return (
    <div className="relative ">
      <div
        className={`${open ? "block" : "hidden"} ${
          !open ? "hidden" : "block"
        } w-[30%] bg-[#fff] h-[470px] shadow-[ 0px 4px 4px rgba(0, 0, 0, 0.25)] fixed  bottom-[68px] right-[40px] rounded`}
      >
        <div className="w-full bg-[#0052CC] h-[50px] flex items-center justify-between px-2 rounded">
          <h1 className="text-[white] text-[28px] font-bold leading-[36px]">
            MSF Sales
          </h1>
          <div
            onClick={handleDrawerOpen}
            className="right-[12.5px] cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-white text-[30px]"
            />
          </div>
        </div>
        <div className="w-full h-[370px] overflow-y-scroll">
          <div className="flex items-center  mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]  " alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px] before:absolute before:content-[""] 
                    before:w-[4px] before:h-[4px] before:top-[50%] before:left-[2px]
                    before:rotate-[60deg] before:border-[5px] before:border-[#F8F0F3]
                    px-[10px] pt-[19px] pb-[20px]   ml-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                Hi! Welcome to MSF Sales
              </p>
            </div>
          </div>

          <div className="flex items-center flex-row-reverse  mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]" alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px] after:absolute after:content-[""] 
                    after:w-[4px] after:h-[4px] after:top-[50%] after:right-[2px]
                    after:rotate-[60deg] after:border-[5px] after:border-[#F8F0F3] 
                    px-[10px]  py-[19px] mr-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                Hi! Welcome to MSF Sales
              </p>
            </div>
          </div>

          <div className="flex items-center mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]" alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px] before:absolute before:content-[""] 
                    before:w-[4px] before:h-[4px] before:top-[50%] before:left-[2px]
                    before:rotate-[60deg] before:border-[5px] before:border-[#F8F0F3] 
                    px-[10px]  py-[19px]  ml-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                Hi! Welcome to MSF Sales
              </p>
            </div>
          </div>

          <div className="flex items-center flex-row-reverse mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]" alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px]  after:absolute after:content-[""] 
                    after:w-[4px] after:h-[4px] after:top-[50%] after:right-[2px]
                    after:rotate-[60deg] after:border-[5px] after:border-[#F8F0F3]
                    px-[10px]  py-[19px]  mr-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                My recorded inventories are not showing in my activity history.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-row-reverse mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]" alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px] after:absolute after:content-[""] 
                    after:w-[4px] after:h-[4px] after:top-[50%] after:right-[2px]
                    after:rotate-[60deg] after:border-[5px] after:border-[#F8F0F3]
                    px-[10px] py-[19px]  mr-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                I want to be sure it is recorded or if the error is a bug
              </p>
            </div>
          </div>

          <div className="flex items-center mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]" alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px] before:absolute before:content-[""] 
                    before:w-[4px] before:h-[4px] before:top-[50%] before:left-[2px]
                    before:rotate-[60deg] before:border-[5px] before:border-[#F8F0F3] 
                    px-[10px] pt-[19px] pb-[20px]   ml-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                Checking your recent data...
              </p>
            </div>
          </div>
          <div className="flex items-center mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]" alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px] before:absolute before:content-[""] 
                    before:w-[4px] before:h-[4px] before:top-[50%] before:left-[2px]
                    before:rotate-[60deg] before:border-[5px] before:border-[#F8F0F3]
                    px-[10px] pt-[19px] pb-[20px]   ml-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                Just checked and it is recorded already. Might have been your
                network
              </p>
            </div>
          </div>
          <div className="flex items-center mt-[17px] mb-[19px]">
            <img src={ProfileIcon} className="mr-[4px]" alt="profile pic" />
            <div className="flex  relative items-center justify-center ">
              <p
                className=' text-[14px] before:absolute before:content-[""] 
                    before:w-[4px] before:h-[4px] before:top-[50%] before:left-[2px]
                    before:rotate-[60deg] before:border-[5px] before:border-[#F8F0F3] 
                    px-[10px] pt-[19px] pb-[20px]   ml-[10px] xs:w-[70%] sm:w-[320px]
                    bg-[#F8F0F3] '
              >
                We are sorry for any inconvenience cause. For more details, you
                can reach us at 01 234 567 890
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white h-[50px] rounded">
          <input
            type="text"
            className=" w-[285px] h-[55px] bg-[#ebcfda4d] 
                rounded-[16px] border-[0] outline-none mr-[5px] sm:mr-[14px]"
          />
          <button
            className=" w-[50px] sm:w-[79px] h-[39px] text-[#0052CC]
                border-solid border-[#0052CC] border-[1px] 
                outline-none rounded-[10px]"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
