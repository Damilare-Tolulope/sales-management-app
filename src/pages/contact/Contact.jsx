/** @format */

import React, { useState } from "react";
import "./Contact.css";
import ImessageIcon from "../../assets/images/svg/mailIcon.svg";
import ILocateIcon from "../../assets/images/svg/LocateIcon.svg";
import IfaxIcon from "../../assets/images/svg/faxIcon.svg";
import IphoneIcon from "../../assets/images/svg/phoneIcon.svg";
import Chatbox from "../../components/Chatbox";
import ChatButton from "../../components/ChatButton";

function Contact() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="aboutus pt-10" onClick={open && handleDrawerOpen}>
      <div className="head-text">
        <h6 className="text-[45px] text-[#0052CC] font-[400] text-center">
          Contact Us
        </h6>
        <p className="text-center text-[24px] font-[400]">
          Your business growth is our top priority
        </p>
      </div>
      <div className="flex flex-col items-start justify-center mt-10 ml-20 pb-20 h-full">
        <h6 className="head-text2">Contact Info</h6>
        <div className="flex text-center my-3">
          <img src={IphoneIcon} alt="logo" />
          <p className="font-[400] text-[16px] ml-5">Tel: 01 234 567 890</p>
        </div>
        <div className="flex text-center mb-3">
          <img src={IfaxIcon} alt="logo" />
          <p className="font-[400] text-[16px] ml-5">Fax: 77777</p>
        </div>
        <div className="flex text-center mb-3">
          <img src={ImessageIcon} alt="logo" />
          <p className="font-[400] text-[16px] ml-5">
            Email: cs@msfsales.com, msfsales@cs.com
          </p>
        </div>
        <div className="flex text-center">
          <img src={ILocateIcon} alt="logo" />
          <p className="font-[400] text-[16px] ml-5">
            Address: 19, Allen Avenue Awolowo Way, Lekki Phase 1{" "}
          </p>
        </div>
      </div>
      <div className="p-10 ">
        <ChatButton handleDrawerOpen={handleDrawerOpen} />
      </div>
      <Chatbox handleDrawerOpen={handleDrawerOpen} open={open} />
    </div>
  );
}

export default Contact;
