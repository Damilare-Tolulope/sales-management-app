/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import forgotPassword from "../../../../assets/images/svg/forgot_password.svg";

function ForgotPw() {
  const [value, setValues] = useState({ email: "" });
  const [setSubmitted] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    navigate("/password-change");
  };
  const handleEmailChange = (event) => {
    event.preventDefault();
    setValues((value) => ({
      email: event.target.value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center w-full ">
      <img
        src={forgotPassword}
        alt="login-pix"
        className="w-[460px] h-[460px] md:w-[350px] lg:w-[460px] mt-10 md:mt-20 xl:mr-10 mx-auto"
      />
      <div className="xl:w-[560px] h-[360px] mt-2 md:mt-[141px] flex flex-col justify-items-center mx-auto">
        <h6 className="text-[#0052CC] font-[500] text-[24px] lg:text-[29px] font-[work sans]">
          Forgot your password?
        </h6>
        <p
          className="text-[#0C1A2C] w-[256px] lg:w-[400px] xl:w-[560px]
] text-[16px] font-[400] font-[work sans] lg:tracking-widest"
        >
          Enter the email address associated with your account and we will send
          you a link to reset your password.
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-5">
              <label
                htmlFor="email"
                className="text-[#7F7F7F] text-[14px] font-[400] font-[work sans]"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id=""
                onChange={handleEmailChange}
                value={value.email}
                className="border rounded-lg w-[256px] lg:w-[400px] xl:w-[560px] h-[48px]"
                placeholder="email address"
              />
            </div>

            <div className="flex flex-col mx-auto mt-9">
              <Link to={"/password-change"}>
                <button
                  type="submit"
                  className="border-none text-[#FFFFFF] rounded-lg  bg-[#0052CC] w-[256px] lg:w-[400px] xl:w-[560px] h-[48px] text-[16px] font-[600]"
                >
                  Continue
                </button>
              </Link>
            </div>
            <div className="text-center mt-2 text-[#0052CC] text-[16px] font-[500]">
              <Link to="/sign-in" className=" decoration-none  mx-auto">
                Back to log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPw;
