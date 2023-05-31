/** @format */

import React from "react";
import { stockData } from "../data/data";

function OrderNumbers() {
  let stock = stockData;
  return (
    <div className="flex items-center md:w-[90%] justify-between flex-wrap">
      {stock &&
        stock.map((item, i) => (
          <div className="flex flex-col items-center py-4 px-4" key={i}>
            <p className="font-medium">{item.type}</p>
            <p className="text-4xl md:text-7xl font-extrabold">{item.value}</p>
          </div>
        ))}
    </div>
  );
}

export default OrderNumbers;
