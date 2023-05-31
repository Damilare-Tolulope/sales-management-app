/** @format */

// /** @format */

import React from "react";
import AuthCard from "../components/AuthCard";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <AuthCard>
      <div className="flex px-4 py-4 min-h-[560px]">
        <div className="w-full">
          <h1 className="text-[#0052CC]">Privacy Policy</h1>

          <div className="pl-6 mt-4">
            <p className="mb-4">
              MSF Sales is commited to providing quality services to you and
              this policy outlines our ongoing obligations to you in respect on
              how we manage your personal information.
            </p>
            <p className="mb-4">
              We have adopted the National Privacy Principles (NPPs) contained
              in the privacy act 1988. The NPPs govern the way we use, collect,
              store, disclose and secure your personal information.
            </p>
            <h6 className="mb-4">How we use this information</h6>
            <p className="mb-4">
              This information is collected through different means like online
              surveys, forms filled on our websites and third parties.
            </p>
            <p className="mb-4">
              We don’t guarantee website links or policies of third parties. We
              collect your personal information for the main purpose of
              providing optimum service to you our customers and providing
              information to our partners and for marketing. When we collect
              these information, we will, where appropraitely inform and explain
              to you why there is need for it.
            </p>
            <h6 className="mb-4">How we use this information</h6>
            <p className="mb-4">
              The information is used to aid in the provision of our various
              products and services, including customer services, accounting,
              billing, collections and marketing of products and services.
            </p>
          </div>

          <div className="float-right mt-4">
            <Link to="/terms-and-condition">
              <button
                type="button"
                className="border-none text-[#FFFFFF] rounded-lg  bg-[#0052CC] w-[256px] h-[48px] text-[16px] font-[600]"
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}

export default PrivacyPolicy;
