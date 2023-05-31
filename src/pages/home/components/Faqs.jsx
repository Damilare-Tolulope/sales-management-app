/** @format */

import React, { useState } from "react";
import "../Home.css";

//create a list of questions and answers
const questions = [
  {
    question: "What is the purpose of this website?",
    answer:
      "This website is designed to help you manage your inventory. It will help you to create your inventory, track your inventory, and manage your inventory. ",
  },
  {
    question: "How do I create an inventory?",
    answer:
      "You can create an inventory by clicking on the “Create Inventory” button on the home page. You will be redirected to a page where you can create your inventory. ",
  },
  {
    question: "How do I track my inventory?",
    answer:
      "You can track your inventory by clicking on the “Track Inventory” button on the home page. You will be redirected to a page where you can track your inventory. ",
  },
  {
    question: "How do I manage my sales?",
    answer:
      "You can manage your sales by clicking on the “Manage Sales” button on the home page. You will be redirected to a page where you can manage your sales. ",
  },
  {
    question: "How do I manage my stocks?",
    answer:
      "You can manage your stocks by clicking on the “Manage Stocks” button on the home page. You will be redirected to a page where you can manage your stocks. ",
  },
];

const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className=" w-full flex justify-center items-center flex-col py-8">
      <h6 className="text-[#0052CC] font-bold text-[16px] mt-10">FAQs</h6>
      <h6 className="pt-4 font-bold md:text-[30px] text-xl text-[#3C4652]">
        Answers to Some of Your Questions
      </h6>
      <hr className="bg-[#0052CC] w-[48px]  font-bold h-[4px] flex justify-center items-center flex-col"></hr>
      <div className="wrapper ">
        <div className="accordion ">
          {questions.map((question, index) => (
            <div className="accordion-item border-t-2 " key={index}>
              <div className="accordion-title" onClick={() => toggle(index)}>
                <h6 className="text-[#3C4652] font-bold">
                  {question.question}
                </h6>
                <span className="accordion-icon">
                  {selected === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={
                  selected === index ? "accordion-show" : "accordion-close"
                }
              >
                <p className="text-[#7F7F7F] text-[16px] font-[400] w-[90%]">
                  {question.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
