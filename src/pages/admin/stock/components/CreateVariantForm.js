/** @format */

import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import { faPlus, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageTransform,
  FilePondPluginImageResize,
  FilePondPluginImageCrop
);
function CreateVariantForm({
  CloseVariantModal,
  toggleClass,
  trackProductToggle,
  changeTrackProductToggle,
  CreateVariant,
}) {
  const [productImg, setProductImg] = useState(null);

  return (
    <form className="rounded-lg bg-white w-full lg:w-[600px] z-50 shadow-md">
      <div className="flex items-center justify-between h-[60px] px-6">
        <h2 className="text-xl">Create Variant</h2>
        <button className="" type="button" onClick={CloseVariantModal}>
          <FontAwesomeIcon icon={faClose} className="" />
        </button>
      </div>
      <div className="overflow-y-auto h-[460px] px-6">
        <div className="flex items-center justify-between  mt-10 md:flex-row flex-col">
          <div className="flex items-center mx-5">
            <FilePond
              allowReplace={true}
              className="rounded-lg w-32"
              files={productImg}
              allowReorder={true}
              allowMultiple={false}
              onupdatefiles={setProductImg}
              labelIdle='<span class="filepond--label-action ">+ Add product image</span> '
              imagePreviewHeight={170}
              imageCropAspectRatio="1:1"
              imageResizeTargetWidth={200}
              imageResizeTargetHeight={200}
              styleLoadIndicatorPosition="center bottom"
              styleButtonRemoveItemPosition="center bottom"
              stylePanelLayout="compact"
            />
          </div>
          <div className="flex items-center">
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-[#D3D3D3] rounded-full p-1 cursor-pointer"
              onClick={changeTrackProductToggle}
            >
              {/* Switch */}
              <div
                className={` md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
   transform ${trackProductToggle ? "bg-[#A9A9A9]" : toggleClass}`}
              ></div>
            </div>
            <p className="mx-3 ">Track Product</p>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Variant name" className="lg:my-3">
            Variant name
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Choose variant attribute" className="lg:my-3">
            Choose variant attribute
          </label>

          <select
            placeholder="Select attribute"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
          >
            <option
              value=""
              className="bg-white rounded-none py-5 text-[#A9A9A9]"
            >
              Select attribute
            </option>
            <option value="color" className="bg-white rounded-none py-5">
              Color
            </option>
            <option value="weight" className="bg-white">
              Weight
            </option>
            <option value="size" className="bg-white">
              Size
            </option>
          </select>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Product code" className="lg:my-3">
            Product code
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Supply code" className="lg:my-3">
            Supply code
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Supply price" className="lg:my-3">
            Supply price
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Retail price" className="lg:my-3">
            Retail price
          </label>
          <input
            type="text"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="Stock action" className="lg:my-3">
            Stock action
          </label>
          <select
            placeholder="Select reason"
            className="bg-[#D3D3D3]/60 rounded-[5px] focus:ring-[#0052CC] border-1 border-[#d3d3d399] focus:border-[#0052CC] lg:py-4"
          >
            <option
              value=""
              className="bg-white rounded-none py-5 text-[#A9A9A9]"
              selected
            >
              Select reason
            </option>
            <option
              value="Stock recieved"
              className="bg-white rounded-none py-5"
            >
              Stock recieved
            </option>
            <option value="inventory re-count" className="bg-white">
              Inventory re-count
            </option>
            <option value="Damage" className="bg-white">
              Damage
            </option>
            <option value="Loss" className="bg-white">
              Loss
            </option>
            <option value="Restock return" className="bg-white">
              Restock return
            </option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between h-[60px] px-6">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faPlus} className="text-[#0052CC]" />
          <p className="mx-2">Add product variant</p>
        </div>
        <button
          type="button"
          className={`bg-[#0052CC] text-white px-10 py-2 rounded-[8px] `}
          onClick={CreateVariant}
        >
          Done
        </button>
      </div>
    </form>
  );
}

export default CreateVariantForm;
