import React from "react";
import "../Faqs.css";
import { faqData } from "../data/faqData";

const FaqBody = () => {
  return (
    <div className="py-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {faqData.map((faq, index) => (
          <div
            className="flex flex-col items-center justify-center w-[70%] m-auto"
            key={index}
          >
            <img
              src={faq.img}
              alt="faq"
              className="w-[10%] h-[10%] pt-20 pb-8"
            />
            <h1 className="py-4 font-[600] text-[25px] text-[#000000]">
              {faq.question}
            </h1>
            <p className="text-center font-[400] text-[20px] text-[#000000]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between md:flex-row flex-col mx-40 my-20">
        <div className="">
          <p className="text-center font-[700] text-[32px] text-[#000000]">
            Can’t find the answer you are looking for?
          </p>
        </div>
        <div className="">
          <button className="w-[130px] h-[45px] px-[16px] md:my-0 my-3 md:mx-0 mx-5 bg-[#0052CC] rounded-[8px] text-[#FFFFFF]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqBody;
