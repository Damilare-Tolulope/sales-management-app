/** @format */

import React from "react";
import WelcomeImage from "../../../assets/signup-page/images/Welcome illustration.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="bg-[#EBCFDA] p-6 h-screen">
      <div className="rounded-lg bg-[#FDFDFD]">
        <div className="flex items-center lg:flex-row flex-col px-4 py-4">
          <div className="w-2/4">
            <img
              src={WelcomeImage}
              alt="welcome"
              className="h-[460px] mx-auto"
            />
          </div>
          <div className="w-2/4">
            <h6 className="text-[#0052CC] font-[500] text-xl">
              Create Account
            </h6>
            <form>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="text-[#7F7F7F] font-[400] text-[14px]"
                >
                  Email address
                </label>

                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full rounded-lg h-[48px]"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="Password"
                  className="text-[#7F7F7F] font-[400] text-[14px]"
                >
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg h-[48px]"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="password"
                  className="text-[#7F7F7F] font-[400] text-[14px]"
                >
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full rounded-lg h-[48px]"
                />
              </div>

              <div className="my-4">
                <label
                  htmlFor="Phone number"
                  className="text-[#7F7F7F] font-[400] text-[14px]"
                >
                  Phone number
                </label>

                <input
                  type="number"
                  placeholder="+234  0000000000"
                  className="w-full rounded-lg h-[48px]"
                />
              </div>
              <div className="my-7">
                <Link to={"/verify-account"}>
                  <button
                    className="bg-[#0052CC] flex items-center justify-center px-[32px] py-2 text-white w-full rounded-lg font-semibold h-[48px]"
                    type="button"
                  >
                    Create account
                  </button>
                </Link>
                <div className="flex items-center justify-center mt-3">
                  <p className="text-[16px]">
                    Already have an account?
                    <Link
                      to={"/sign-in"}
                      className="text-[#0052CC] decoration-none font-medium transition-all duration-300 ml-1"
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
      <div className="flex items-center justify-center w-full mt-4">
        <p className="text-[14px] font-[400]">@ 2022 MSF Sales</p>
      </div>
    </div>
  );
}

export default SignUp;
