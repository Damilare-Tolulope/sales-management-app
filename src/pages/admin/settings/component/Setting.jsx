/** @format */

import React from "react";
import { Link } from "react-router-dom";
import angleIcon from "../../../../assets/images/svg/angleicon.svg";

function Setting() {
  return (
    <div className="m-3">
      <div className="rounded-lg px-[15px] py-[9px] flex flex-row justify-between w-full lg:w-[700px] h-[60px] border border-[#0052CC]">
        <div className="">
          <p className="text-[14px] font-[600] text-[#0052CC]">
            Profile Information
          </p>
          <p className="text-[14px] font-[400] text-[#0052CC]">
            Edit your personal details
          </p>
        </div>
        <Link to={"/admin/settings/profile"} className="">
          <img
            src={angleIcon}
            alt="next"
            className="mt-2 border bg-[#0052CC] p-1"
          />
        </Link>
      </div>

      <div className="mt-3 rounded-lg px-[15px] py-[9px] flex flex-row justify-between w-full lg:w-[700px] h-[60px] border border-[#0052CC]">
        <div className="">
          <p className="text-[14px] font-[600] text-[#0052CC]">Security</p>
          <p className="text-[14px] font-[400] text-[#0052CC]">
            Change password and transaction PIN
          </p>
        </div>
        <Link to={"/admin/settings/security"} className="">
          <img
            src={angleIcon}
            alt="next"
            className="mt-2 border bg-[#0052CC] p-1"
          />
        </Link>
      </div>

      <div className="mt-3 rounded-lg px-[15px] py-[9px] flex flex-row justify-between w-full lg:w-[700px] h-[60px] border border-[#0052CC]">
        <div className="">
          <p className="text-[14px] font-[600] text-[#0052CC]">
            Admin Settings
          </p>
          <p className="text-[14px] font-[400] text-[#0052CC]">
            Edit admin details{" "}
          </p>
        </div>
        <Link to={"/admin/settings/profile"} className="">
          <img
            src={angleIcon}
            alt="next"
            className="mt-2 border bg-[#0052CC] p-1"
          />
        </Link>
      </div>
    </div>
  );
}

export default Setting;
