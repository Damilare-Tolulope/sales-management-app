/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import forgotPassword from "../../../../assets/images/svg/forgot_password.svg";

function ResetPw() {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
  });
  const [setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    alert(
      `password:${values.password} and confirmpassword:${values.confirmPassword} successful`
    );
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleConfirmPasswordChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      confirmPassword: event.target.value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center w-full ">
      <img
        src={forgotPassword}
        alt="login-pix"
        className="w-[460px] h-[460px] md:w-[350px] lg:w-[460px] mt-10 md:mt-20 xl:mr-10 mx-auto"
      />
      <div className="xl:w-[560px] h-[360px] mt-4 md:mt-[141px] flex flex-col justify-items-center mx-auto">
        <h6 className="text-[#0052CC] font-[500] text-[24px] lg:text-[29px] font-[work sans]">
          Reset your password?
        </h6>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-5">
              <label
                htmlFor="password"
                className="text-[#7F7F7F] text-[14px] font-[400] font-[work sans]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                onChange={handlePasswordChange}
                value={values.password}
                className="border rounded-lg w-[256px] lg:w-[400px] xl:w-[560px] h-[48px]"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="confirmPassword"
                className="text-[#7F7F7F] text-[14px] font-[400]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id=""
                onChange={handleConfirmPasswordChange}
                value={values.confirmPassword}
                className="border rounded-lg w-[256px] lg:w-[400px] xl:w-[560px] h-[48px]"
                placeholder="Confirm password"
              />
            </div>
            <div className="flex flex-col mx-auto mt-9">
              <button
                type="submit"
                className="border-none text-[#FFFFFF] rounded-lg  bg-[#0052CC] w-[256px] lg:w-[400px] xl:w-[560px] h-[48px] text-[16px] font-[600]"
              >
                Continue
              </button>
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

export default ResetPw;
