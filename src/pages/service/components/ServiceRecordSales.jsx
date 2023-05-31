/** @format */

import React from "react";
import "../Services.css";
import IRecordSales from "../../../assets/images/recordSales.png";
import ITrackSales from "../../../assets/images/trackSales.png";
import ISalesDetails from "../../../assets/images/SalesDetails.png";
import Iaddsales from "../../../assets/images/addsales.png";
import IstockInventory from "../../../assets/images/stockInventory.png";

const ServiceRecordSales = () => {
  return (
    <div>
      <div className="w-full flex justify-between mb-20">
        <div className="head-text w-[40%] ml-14">
          <h6 className="text-[45px] text-[#0052CC] font-[400]">
            Record Sales
          </h6>
          <p className="text-[16px] font-[400]">
            Sales recording enables you to enter information about sales revenue
            into the accounting records so that it reflects accurate balances in
            affected accounts.
          </p>
          <br></br>
          <p className="text-[16px] font-[400]">
            Daily sales report gives insights on a sales representative or
            agent's day-to-day activities, and you can identify operational
            bottlenecks or any other challenges on the way. Weekly sales reports
            can help managers monitor the number of deals closed by the team or
            the revenue generated.
          </p>
          <br></br>
          <p className="text-[16px] font-[400]">
            In MSF sales, you can also tweak how you record your sales. It
            ensures you input detailed information on each sales which includes
            product code, images of the product, product’s quantity etc.
          </p>
        </div>
        <div className="mr-14">
          <img className="" src={Iaddsales} alt="" />
        </div>
      </div>

      <div className="w-full flex justify-between mb-20">
        <div className="head-text w-[40%] ml-14">
          <h6 className="text-[45px] text-[#0052CC] font-[400]">Track sales</h6>
          <p className="text-[16px] font-[400]">
            Sales tracking helps you collect essential sales metrics, analyze
            them, and use them to refine your process. When done correctly, it
            gives you insight about each piece of the sales process, and helps
            you understand exactly how that relates to your goals and quota
            attainment.
          </p>
          <br></br>
          <p className="text-[16px] font-[400] mt-40">
            Additionally, MSF sales issues downloadable sales receipt that helps
            keep track of your sales process and generate an evidence in case of
            faulty or miscalculated goods in the warehouse.
          </p>
          <br></br>
        </div>
        <div className="mr-14">
          <img className="mb-10" src={ITrackSales} alt="" />
          <img className="" src={ISalesDetails} alt="" />
        </div>
      </div>

      <div className="w-full flex justify-between mb-20">
        <div className="head-text w-[40%] ml-14">
          <h6 className="text-[45px] text-[#0052CC] font-[400]">
            Sales Inventory
          </h6>
          <p className="text-[16px] font-[400]">
            Inventory is the accounting of items, component parts and raw
            materials that a company either uses in production or sells.
          </p>
          <br></br>
          <p className="text-[16px] font-[400]">
            Sales Inventory means all finished goods, spare parts, refurbished
            equipment, replacement and component parts owned or stored by or for
            seller, including goods in transit, for potential sale by the
            Business and any associated reserves and prepaid deposits for any of
            the same.
          </p>
          <br></br>
          <p className="text-[16px] font-[400]">
            MSF sales helps you detect early when production exceeds sales or
            when sales exceed production. All you need to do is accurately
            record your sales and products in stock.
          </p>
        </div>
        <div className="mr-14">
          <img className="" src={IRecordSales} alt="" />
        </div>
      </div>

      <div className="w-full flex justify-between mb-10">
        <div className="head-text w-[40%] ml-14">
          <h6 className="text-[45px] text-[#0052CC] font-[400]">
            Manage Stocks
          </h6>
          <p className="text-[16px] font-[400]">
            Manage stocks helps manage the amount of product you have in stock
            and could be done with the help of products in stock, and filled
            templates.
          </p>
          <br></br>
          <p className="text-[16px] font-[400]">
            MSF sales helps you manage the amount of products you have in stock.
            You do not have to sweat or raise a muscle before knowing when to
            order for more stocks.
          </p>
          <br></br>
        </div>
        <div className="mr-14">
          <img className="" src={IstockInventory} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceRecordSales;
