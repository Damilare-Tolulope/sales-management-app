import React from "react";
import { Link } from "react-router-dom";
import BiometricsImage from "../../../assets/images/biometrics.png";
function Biometrics({ toggle, setToggle }) {
  const activateToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <h1>Biometrics</h1>
      <div className="w-full flex items-center justify-center mt-10">
        <div className="flex flex-col items-center">
          <img
            src={BiometricsImage}
            alt="biometrics"
            className={`animate-pulse duration-300 transition-all ${
              !toggle && "scale-110"
            }`}
          />

          <button
            className={`bg-[#0052CC] rounded-[8px] px-5 py-3 text-white font-semibold mt-14 mb-10 hover:opacity-95 transition-all duration-300 ${
              !toggle && "scale-90  opacity-70 "
            }`}
            onClick={activateToggle}
          >
            Activate Biometric
          </button>

          <Link to={"/admin/settings/security/pin"}>
            <button className="bg-[#0052CC] rounded-[8px] px-9 py-3 text-white font-semibold my-10">
              Save changes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Biometrics;
