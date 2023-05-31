/** @format */

import React from "react";
import { topData } from "../data/data";

const Overview = () => {
  return (
    <div className="flex justify-start items-center mt-5">
      {topData.map((card, index) => {
        const { revenue, image, what  } = card;
        return (
          <div
            className="py-5 px-3 shadow-lg w-[225px] rounded-lg text-center text-[#0C1A2C] mx-[2rem]"
            key={index}>
            <img className="mx-auto mb-2" src={image} alt="stock" />

            <p className="font-normal text-[16px]">
              {what}
            </p>

            <h1 className="my-2 font-bold font-lg text-2xl">{revenue}</h1>


          </div>
        );
      })}
    </div>
  );
};

export default Overview;
