import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="mx-5 py-2 h-full">
      <h1>Reset Password</h1>
      <div className="my-6">
        {" "}
        <input
          type="password"
          placeholder="Enter old password"
          className="w-full lg:w-[700px] h-[50px] rounded-[8px] border-[#0052CC] focus:ring-[#0052CC] focus:border-[#0052CC]"
        />
      </div>

      <div className="my-6">
        {" "}
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full lg:w-[700px] h-[50px] rounded-[8px] border-[#0052CC] focus:ring-[#0052CC] focus:border-[#0052CC]"
        />
      </div>
      <div className="my-6">
        {" "}
        <input
          type="password"
          placeholder="Confirm new password"
          className="w-full lg:w-[700px] h-[50px] rounded-[8px] border-[#0052CC] focus:ring-[#0052CC] focus:border-[#0052CC]"
        />
      </div>
      <div className="flex lg:w-1/2 justify-end mt-[20%] ">
        <Link to={"/admin/settings/security"}>
          <button className="bg-[#0052CC] rounded-[8px] px-5 py-3 text-white font-semibold">
            Save changes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResetPassword;
