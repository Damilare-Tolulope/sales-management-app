/** @format */

import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="contact-bg px-[60px] py-14 flex gap-[5%] items-center lg:flex-row flex-col">
        <div className=" lg:max-w-[45%]">
          <h6 className="text-[#0052CC] font-bold text-[16px]">Contact Us</h6>
          <h6 className="py-4 font-bold md:text-[30px] text-2xl text-[#3C4652]">
            Get In Touch With Our Customer Service
          </h6>
          <hr className="bg-[#0052CC] max-w-[52px] font-bold h-[4px]" />
          <p className="py-8 text-[#7F7F7F] md:text-[30px] text-lg font-[400]">
            Contact us on challenges you may encounter. We are here to help.
          </p>
        </div>
        <form className="contact-form-custom w-full max-w-lg border rounded p-8">
          <h6 className="py-4 font-bold text-center text-[30px] text-[#3C4652]">
            Send Message
          </h6>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Email Address
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                placeholder="Number"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Subject
              </label>
              <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2"
                htmlFor="grid-last-name"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                rows="7"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <button className="btn my-6">Read more</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
