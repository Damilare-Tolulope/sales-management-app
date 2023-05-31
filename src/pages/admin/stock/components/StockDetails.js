import React from "react";

const StockDetails = ({ details }) => {
  if (details) {
    return (
      <>
        {details &&
          details?.map((detail, index) => {
            const { code, product, status, date, quantity } = detail;
            return (
              <tr
                className="text-[14px] text-[#7F7F7F]  border-b border-[#0052CC]"
                key={index}
              >
                <td className="p-4 ml-10">{code}</td>
                <td className="p-4 ml-10 text-black">{product}</td>
                <td className="p-4 ml-10">
                  {status ? (
                    <span>
                      <span
                        style={{ padding: "1px 8px", borderRadius: "50%" }}
                        className="mr-2 bg-[#FF8E2B]"
                      ></span>{" "}
                      <span>Active</span>
                    </span>
                  ) : (
                    <span>
                      <span
                        style={{ padding: "1px 8px", borderRadius: "50%" }}
                        className="mr-2 bg-[#11B021]"
                      ></span>
                      <span>In-Active</span>
                    </span>
                  )}
                </td>
                <td className="p-4 ml-10">{date}</td>
                <td className="p-4 ml-10">{quantity}</td>
              </tr>
            );
          })}
      </>
    );
  }
};

export default StockDetails;
