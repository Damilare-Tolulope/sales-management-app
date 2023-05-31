/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginHello from "../../../../assets/images/svg/loginHello.svg";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(submitted);
    navigate("/admin/dashboard");
  };
  const handleEmailChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handlePasswordChange = (event) => {
    event.preventDefault();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row justify-center w-full">
      <img
        src={loginHello}
        alt="login-pix"
        className="w-[460px] h-[460px] md:w-[400px] lg:w-[460px] mt-10 md:mt-20 xl:mr-10 mx-auto"
      />
      <div className="xl:w-[560px] h-[360px] mt-4 md:mt-[141px] flex flex-col justify-items-center mx-auto">
        <h6 className="text-[#0052CC] font-[500] text-[29px] font-[work sans]">
          Log in
        </h6>
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
                value={values.email}
                className="border rounded-lg w-[256px] lg:w-[400px] xl:w-[560px] h-[48px]"
                placeholder="email address"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label
                htmlFor="password"
                className="text-[#7F7F7F] text-[14px] font-[400]"
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
                placeholder="password"
              />
            </div>
            <div className="text-left mt-2">
              <p className="flex">
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="ml-1 text-[#0052CC] decoration-none"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="flex flex-col mx-auto mt-4">
              <button
                type="submit"
                className="border-none text-[#FFFFFF] rounded-lg  bg-[#0052CC] w-[256px] lg:w-[400px] xl:w-[560px] h-[48px] text-[16px] font-[600]"
              >
                Log in
              </button>
            </div>
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-[#0052CC] decoration-none  ml-auto"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
