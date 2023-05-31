/** @format */

// /** @format */

import React from "react";
import AuthCard from "../../../components/AuthCard";

function TermAndCondition() {
  return (
    <AuthCard>
      <div className="flex px-4 py-4 min-h-[560px]">
        <div className="w-full">
          <h1 className="text-[#0052CC]">Terms and Conditions</h1>

          <div className="pl-6 mt-4">
            <p className="mb-4">
              Please read this Terms and Conditions carefully before using “MSF
              Sales” website. Your access to and use of the service is
              condotioned on your acceptance of and compliace with these terms.
              By accessing or using the service you agree to be bound by these
              terms, if you disagree witth any part of the terms then you may
              not access the service.
            </p>

            <p className="mb-4">
              We are MSF Sales and this terms of service shows how everything
              here works, the laws that apply to our company and certain things
              we believe to be true. As a result this terms and conditions
              allows how to have a functional working relationship with you and
              a better understanding between us and you our customers. These
              terms include the following headings;
              <ul className="text-[#0052CC] mt-4">
                <li className="mb-4">
                  What you can expect from us, which describes our services
                </li>
                <li className="mb-4">
                  What we expect from you, which establishes certain rules in
                  our services you must follow
                </li>
                <li className="mb-4">
                  Content in MSF Sales, which describes the intellectual
                  property rights to the content on our page.
                </li>
                <li className="mb-4">
                  In case of disagreements, the correct legal channel to resolve
                  things amicably.
                </li>
              </ul>
            </p>
            <h6 className="mb-4">Governing Law</h6>
            <p className="mb-4">
              These terms shall be governed and construed in accordance with the
              laws of NIgeria, without regards to its conflicy of law provisons.
              Our failure to enforce any right on provisions of these terms will
              not be considered a waiver of those rights. If any provisons of
              these Terms and Conditons is held to be invalid or unenforceable
              by a court, the remaining provision shall thereby be legally
              defined and made between customers and service providers
              alike.....
            </p>
          </div>

          <div className="float-right mt-4">
            <button
              type="button"
              className="border-none text-[#333333] rounded-lg  bg-[#EBCFDA] w-[256px] h-[48px] text-[16px] font-[600] mr-8"
            >
              Decline
            </button>
            <button
              type="button"
              className="border-none text-[#FFFFFF] rounded-lg  bg-[#0052CC] w-[256px] h-[48px] text-[16px] font-[600]"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}

export default TermAndCondition;
