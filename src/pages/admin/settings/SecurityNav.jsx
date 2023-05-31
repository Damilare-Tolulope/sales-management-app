import React from "react";
import { Link } from "react-router-dom";

function SecurityNav() {
  return (
    <div className="mx-2">
      <div className="mt-10 mb-10 rounded-lg px-[15px] py-[9px] flex flex-row items-center justify-between w-full lg:w-[700px] h-[60px] border border-[#0052CC]">
        <div className="">
          <p className="text-[14px] font-[600] text-[#0052CC]">
            Reset Password
          </p>
          <p className="text-[14px] font-[400] text-[#0052CC]">
            Change your old password to a new one
          </p>
        </div>
        <Link to={"/admin/settings/security/password"}>
          <button className="border bg-[#0052CC]  py-2 text-white rounded-[8px] px-3">
            Reset Password
          </button>
        </Link>
      </div>
      <div className="mt-3 rounded-lg px-[15px] py-[9px] flex flex-row items-center justify-between w-full lg:w-[700px] h-[60px] border border-[#0052CC]">
        <div className="">
          <p className="text-[14px] font-[600] text-[#0052CC]">Reset Pin</p>
          <p className="text-[14px] font-[400] text-[#0052CC]">
            Change your transaction pin to a new one
          </p>
        </div>
        <Link to={"/admin/settings/security/pin"}>
          <button className="border bg-[#0052CC]  py-2 text-white rounded-[8px] px-3">
            Reset Pin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SecurityNav;
