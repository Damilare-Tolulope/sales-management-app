import { useState, useEffect } from "react";
import fakeData from "../receipts/fakeData.json";

export default function SalesReceipt() {
  // !!NOTE replace URL with actual API URL for receipt
  // TODO replace URL with actual API URL for receipt

  const URL = "https://api.jsonbin.io/v3/b/62d433b55ecb581b56c2265d";

  const [data, setData] = useState(fakeData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((usefulData) => {
        setData(usefulData.record);
        setLoading(false);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
        setError(setError);
      });
  }, []);

  if (error) {
    console.error(error);
  }

  return (
    <>
      <div className="container bg-white w-full text-[#222] p-5">
        <div className="font-bold text-xl">Thanks for Your Purchase</div>

        <p className="font-normal my-2">
          Hi Andrea, here’s your receipt, your order has been confirmed
        </p>

        <div className="order-details flex flex-row justify-evenly flex-nowrap my-[44px] p-0">
          {/* Order details header */}

          <div className="w-[25%]">
            <p className="title font-bold">Date of Purchase</p>
            <p className="subtitle font-normal text-sm">10th January, 2021</p>
          </div>

          <div className="w-[20%]">
            <p className="title font-bold">Tracking Number</p>
            <p className="subtitle font-normal text-sm">89981308</p>
          </div>

          <div className="w-[30%]">
            <p className="title font-bold">Address</p>
            <p className="subtitle font-normal text-sm">
              Kadac Lodge, Ifite Awka, Anambra State
            </p>
          </div>

          <div className="w-[25%]">
            <p className="title font-bold">Estimated delivery</p>
            <p className="subtitle font-normal text-sm">
              12th Jan - 15th Jan, 2021
            </p>
          </div>
        </div>

        {loading && <p>Loading...</p>}

        {/* Order details - bought */}

        {data.map((productDetails) => (
          <>
            <div
              key={productDetails.id}
              className="order-details-container flex flex-row flex-start text-left flex-nowrap mb-5 p-0"
            >
              <div className="w-[25%]">
                <div className="order-image">
                  <img
                    src={productDetails.img}
                    alt="winterJacket"
                    className="rounded w-[150px] h-[150px] aspect-square"
                  />
                </div>
              </div>

              <div className="w-[35%]">
                <div className="product-name flex flex-col justify-items-center content-center">
                  <p className="name font-bold">{productDetails.name}</p>

                  <p className="color">Color: {productDetails.color}</p>

                  <p className="size">Size: {productDetails.size}</p>
                </div>
              </div>

              <div className="w-[20%]">
                <div className="quantity">Qty: {productDetails.qty}</div>
              </div>

              <div className="w-[20%]">
                <div className="price">Price: #{productDetails.price}</div>
              </div>
            </div>
          </>
        ))}

        {/* Total container */}
        <div className="my-4 text-right w-[90%]">Total: #140</div>

        <div className="btn-container flex flex-row space-around items-center my-[28px]">
          <div className="w-1/2 text-center">
            <button className="btn py-2 px-[12px] rounded text-[#0052CC] bg-[#fff] hover:bg[#0052CC] border-solid border-[#0052CC] border  mx-1">
              Download Receipt
            </button>
          </div>

          <div className="w-1/2 text-center">
            <button className="btn py-2 px-[12px] rounded text-white bg-[#0052CC] border-solid border-[#0052CC] border mx-1">
              Track your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
