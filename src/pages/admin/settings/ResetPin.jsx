import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ResetPin({ toggle }) {
  const toggleClass = "transform translate-x-5 bg-[#0052CC]";
  const navigate = useNavigate();
  const changeToggle = () => {
    navigate("/admin/settings/security/biometrics");
  };
  return (
    <div className="mx-5 py-2 h-full over">
      <h1>Reset Pin</h1>
      <div className="my-6">
        {" "}
        <input
          type="password"
          placeholder="Enter old pin"
          className=" w-full lg:w-[700px] h-[50px] rounded-[8px] border-[#0052CC] focus:ring-[#0052CC] focus:border-[#0052CC]"
        />
      </div>

      <div className="my-6">
        {" "}
        <input
          type="password"
          placeholder="Enter new pin"
          className=" w-full lg:w-[700px] h-[50px] rounded-[8px] border-[#0052CC] focus:ring-[#0052CC] focus:border-[#0052CC]"
        />
      </div>
      <div className="my-6">
        {" "}
        <input
          type="password"
          placeholder="Confirm new pin"
          className=" w-full lg:w-[700px] h-[50px] rounded-[8px] border-[#0052CC] focus:ring-[#0052CC] focus:border-[#0052CC]"
        />
      </div>
      <div className="flex items-center justify-between mt-5 lg:w-1/2">
        <h2 className="text-[#0052CC]">Biometric</h2>

        <div
          className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-white border-[#555555] border-2 rounded-full p-1 cursor-pointer"
          onClick={changeToggle}
        >
          {/* Switch */}
          <div
            className={`border-2 border-[#555555] md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
   transform ${toggle ? null : toggleClass}`}
          ></div>
        </div>
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

export default ResetPin;
