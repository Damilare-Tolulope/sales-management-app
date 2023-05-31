/** @format */

import React from "react";
import profileImg from "../../../../assets/images/svg/profileimg.svg";

function Details() {
  return (
    <div>
      <p className="m-5 font-[500] text-[29px] text-[#333333]">
        Profile Information
      </p>
      <div className="m-5 flex flex-row ">
        <div className="p-8 rounded-full bg-[#0052CC] w-[150px] h-[150px] flex flex-row justify-center">
          <img src={profileImg} alt="profileimg" className="" />
        </div>
        <p className="mt-28 text-[#0052CC] font-[400] text-[16px]">
          Change profile picture
        </p>
      </div>
      <form className="m-5">
        <div className="flex flex-row mb-5 ">
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="
                    text-[#7F7F7F]"
            >
              Full Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#402f2f] text-[A9A9A9] w-[340px] rounded-lg"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col ml-12">
            <label
              htmlFor=""
              className="
                    text-[#7F7F7F]"
            >
              Business Name
            </label>
            <input
              type="text"
              name=""
              id=""
              className="border border-[#402f2f] text-[A9A9A9] w-[340px] rounded-lg"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="flex flex-row mb-5">
          <div className="flex flex-col">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              name=""
              id=""
              className="border border-[#402f2f] text-[A9A9A9] w-[340px] rounded-lg"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col ml-12">
            <label
              htmlFor=""
              className="
                    text-[#7F7F7F]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name=""
              id=""
              className="border border-[#402f2f] text-[A9A9A9] w-[340px] rounded-lg"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="
                    text-[#7F7F7F]"
            >
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              className="border border-[#402f2f] text-[A9A9A9] w-[340px] rounded-lg"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col"></div>
        </div>
        <div>
          <button className="ml-[395px] mt-8 bg-[#0052CC] w-[172px] h-[48px] rounded-lg text-white">
            Edit Profile{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Details;
