/** @format */

import React from "react";
import LockImage from "../../../assets/signup-page/images/Frame 13979.png";
import ReactCodeInput from "react-verification-code-input";
import "./AuthPages.css";
import { Link } from "react-router-dom";

function VerifyAccount() {
  return (
    <div className=" bg-[#EBCFDA] p-8 h-screen">
      <div className="rounded-lg bg-[#FDFDFD]">
        <div className="flex items-center px-4 py-4 h-[560px]">
          <div className="w-2/4 flex items-center justify-center">
            <img src={LockImage} alt="padlock" />
          </div>
          <div className="sm:ml-10 lg:mr-0 sm:mr-10">
            <h6 className="text-[#0052CC] font-[500] text-xl">
              Get Account verified
            </h6>
            <p className="max-w-md font-medium mt-5">
              Please check your inbox. A unique code has been sent to the email
              address and phone number you provided.
            </p>
            <div className="my-5">
              <div className="flex w-[80%]">
                <p
                  className="justify-end ml-auto text-[
#6A6A6A] text-[12px] mb-3 font-[400]"
                >
                  02:30 Remaining
                </p>
              </div>
              <div className="md:flex items-center ">
                <ReactCodeInput type="number" fields={4} />
                <button className="bg-[#0052CC] flex items-center justify-center px-[32px] py-2 text-white w-[28%] rounded-lg font-semibold md:mt-0 mt-6">
                  Verify
                </button>
              </div>
              <div className="flex w-[60%] mt-5">
                <p
                  className="justify-end mr-auto text-[
						#0052CC] text-[15.83px] text-[#0052CC] m-0 p-0 font-[500]"
                >
                  <button type="button">Resend Code</button>
                </p>
              </div>
            </div>
            <div>
              <p className="mb-5">
                Please agree to our
                <Link
                  to={"/terms-and-condition"}
                  className="text-[#0052CC] ml-1"
                >
                  terms
                </Link>
                <span className="ml-1">and</span>
                <Link
                  to={"/terms-and-condition"}
                  className="text-[#0052CC] ml-1"
                >
                  conditions
                </Link>
                <span className="ml-1">and</span>
                <Link to={"/privacy-policy"} className="text-[#0052CC] ml-1">
                  privacy policy
                </Link>
              </p>
              <div className="flex items-center mb-5">
                <input
                  type="checkbox"
                  name="agree"
                  className="mx-3 custom-checkbox focus:ring-0"
                  id=""
                />
                <label htmlFor="agree">
                  I agree to the terms and conditions
                </label>
              </div>
              <div className="flex items-center mb-5">
                <input
                  type="checkbox"
                  name="agree"
                  className="mx-3 custom-checkbox focus:ring-0"
                  id=""
                />
                <label htmlFor="agree">I agree to privacy policy</label>
              </div>
            </div>
            <Link to={"/business-account"}>
              <button
                className="bg-[#0052CC] flex items-center justify-center px-[32px] py-2 text-white w-full rounded-lg font-semibold"
                type="button"
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyAccount;
