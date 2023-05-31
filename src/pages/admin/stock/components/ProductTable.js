/** @format */

import React, { useEffect, useState } from "react";
import { useRef } from "react";
import CreateItemIcon from "../../../../assets/images/createItemsIcon.png";
import PlusCircle from "../../../../assets/images/plusCircle.png";
import CustomModal from "../../../../components/CustomModal";
import CreateVariantForm from "./CreateVariantForm";
import CreateItemForm from "./CreateItemForm";
import StockDetails from "./StockDetails";
import { stockDetails as details } from "../data/data";

function ProductTable() {
  const [showModal, setShowModal] = useState(false);
  const [showVariantModal, setShowVariantModal] = useState(false);
  const variantRef = useRef();
  const [trackProductToggle, setTrackProductToggle] = useState(true);
  const [testData, setTestData] = useState([]);
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [active, setActive] = useState(true);
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [variantDetails, setVariantDetails] = useState(false);

  useEffect(() => {
    setTestData(details);
    console.log(testData);
  }, [testData]);

  const changeProductName = (e) => {
    setProductName(e.target.value);
  };
  const changeProductCode = (e) => {
    setProductCode(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const changeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const changeStatus = (bool) => {
    setActive(bool);
  };
  const toggleClass = "transform translate-x-5 bg-[#0052CC]";
  const CloseVariantModal = () => {
    setShowVariantModal(false);
  };
  const CloseItemModal = () => {
    setShowModal(false);
  };
  const changeTrackProductToggle = () => {
    setTrackProductToggle(!trackProductToggle);
  };
  const toggleVariantBox = (e) => {
    setVariantDetails(!variantDetails);
  };
  const OpenVaiantModal = () => {
    if (variantRef.current.checked) {
      setTimeout(() => {
        setShowVariantModal(true);
        setShowModal(false);
      }, 300);
    }
  };
  const CreateVariant = () => {
    setShowVariantModal(false);
    setVariantDetails(true);

    setShowModal(true);
  };
  const addItem = () => {
    const formData = {
      code: productCode,
      product: productName,
      status: active,
      date: date,
      quantity: quantity,
    };
    setTestData([...testData, formData]);

    setShowModal(false);
    console.log(variantRef.current.checked);
  };

  return (
    <div className="my-5 h-full">
      <table className="w-full h-full border-collapse border border-[#0052CC]">
        <thead className="bg-[#0052CC] text-white">
          <tr className="text-[18px] font-normal">
            <td className="p-4">Product Code</td>
            <td className="p-4">Product</td>
            <td className="p-4">Status</td>
            <td className="p-4">Date</td>
            <td className="p-4">Quantity</td>
          </tr>
        </thead>
        <StockDetails details={testData} />
      </table>

      {testData !== [] && (
        <div className="flex justify-between items-center mt-5">
          <p className="text-[#333] text-[14px]">
            Low stock alerts from stock inventory
          </p>
          <button
            className="px-5 py-3 rounded-md flex items-center border border-[#0052CC] cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <img src={PlusCircle} alt="plus" className="mr-2 h-5" />
            New Items
          </button>
        </div>
      )}

      {testData === [] && (
        <div className="flex h-full items-center justify-center min-h-[40vh]">
          <div className="flex flex-col items-center">
            <img src={CreateItemIcon} alt="" />
            <p>No item Found</p>
            <button
              className="flex items-center border-2 p-3 rounded-[8px] border-[#0052CC] hover:bg-[#0052CC] hover:text-white transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              <img src={PlusCircle} alt="" />
              <p className="mx-2">Create New items</p>
            </button>
          </div>
        </div>
      )}
      <CustomModal
        onClose={() => setShowVariantModal(false)}
        visible={showVariantModal}
      >
        <CreateVariantForm
          toggleClass={toggleClass}
          CloseVariantModal={CloseVariantModal}
          trackProductToggle={trackProductToggle}
          changeTrackProductToggle={changeTrackProductToggle}
          CreateVariant={CreateVariant}
        />
      </CustomModal>
      <CustomModal onClose={() => setShowModal(false)} visible={showModal}>
        <CreateItemForm
          addItem={addItem}
          toggleClass={toggleClass}
          variantRef={variantRef}
          CloseItemModal={CloseItemModal}
          trackProductToggle={trackProductToggle}
          changeTrackProductToggle={changeTrackProductToggle}
          productCode={productCode}
          productName={productName}
          date={date}
          quantity={quantity}
          active={active}
          changeProductCode={changeProductCode}
          changeProductName={changeProductName}
          changeQuantity={changeQuantity}
          changeDate={changeDate}
          changeStatus={changeStatus}
          OpenVaiantModal={OpenVaiantModal}
          variantDetails={variantDetails}
          toggleVariantBox={toggleVariantBox}
        />
      </CustomModal>
    </div>
  );
}

export default ProductTable;
