/** @format */
import React from "react";
import WelcomeImage from "../../../assets/signup-page/images/Welcome illustration.png";
import "./AuthPages.css";
import { Link } from "react-router-dom";

function BusinessAccount() {
  return (
    <div className="bg-[#EBCFDA] p-8">
      <div className="rounded-lg bg-[#FDFDFD]">
        <div className="flex items-center lg:flex-row flex-col px-4 py-4">
          <div className="w-2/4">
            <img
              src={WelcomeImage}
              alt="welcome"
              className="h-[460px] mx-auto"
            />
          </div>

          <div className="w-2/4 flex items-center">
            <div className="w-full">
              <h6 className="text-[#0052CC] font-[500] text-xl">
                Business Details
              </h6>
              <form>
                <div className="my-4">
                  <label
                    htmlFor="Business name"
                    className="text-[#6b5151] font-[400] text-[14px]"
                  >
                    Business Name
                  </label>

                  <input
                    type="text"
                    placeholder="Business name"
                    className="w-full rounded-lg h-[48px]"
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor="Business category"
                    className="text-[#7F7F7F] font-[400] text-[14px]"
                  >
                    Business Category
                  </label>
                  <select className="w-full rounded-lg h-[48px]">
                    <option value="" selected>
                      -- Select --
                    </option>
                    <option value="Agency and sales house">
                      Agency and sales house
                    </option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Arts and Design">Arts and Design</option>
                    <option value="Automobiles">Automobiles</option>
                    <option value="Beauty products">Beauty products</option>
                    <option value="Construction">Construction</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Education">Education</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Health care">Health care</option>
                    <option value="Financial services">
                      Financial services
                    </option>
                    <option value="Technology">Technology</option>
                    <option value="Telecommunications">
                      Telecommunications
                    </option>
                    <option value="Services">Services</option>
                    <option value="Retail">Retail</option>
                  </select>
                </div>

                <div className="my-4">
                  <label
                    htmlFor="Business address"
                    className="text-[#7F7F7F] font-[400] text-[14px]"
                  >
                    Business Address
                  </label>

                  <input
                    type="text"
                    placeholder="Business address"
                    className="w-full rounded-lg h-[48px]"
                  />
                </div>

                <div className="my-4">
                  <label
                    htmlFor="Business Website"
                    className="text-[#7F7F7F] font-[400] text-[14px]"
                  >
                    Business Website (Optional)
                  </label>

                  <input
                    type="text"
                    placeholder="Business website"
                    className="w-full rounded-lg h-[48px]"
                  />
                </div>

                <div className="my-7">
                  <Link to={"/admin/dashboard"}>
                    <button
                      className="bg-[#0052CC] flex items-center justify-center h-[48px] text-white w-full rounded-lg font-semibold"
                      type="button"
                    >
                      Continue
                    </button>
                  </Link>

                  <div className="flex items-center justify-center mt-3">
                    <p className="text-[16px]">
                      Already have an account?
                      <Link
                        to={"/sign-in"}
                        className="text-[#0052CC] font-medium transition-all duration-300"
                      >
                        Log in
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <p className="text-[14px] font-[400]">@ 2022 MSF Sales</p>
      </div>
    </div>
  );
}

export default BusinessAccount;
