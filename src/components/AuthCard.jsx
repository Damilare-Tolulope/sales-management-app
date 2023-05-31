/** @format */

import React from "react";

function AuthCard({ children }) {
  return (
    <div className="bg-[#EBCFDA] p-6 min-h-screen">
      <div className="rounded-lg bg-[#FDFDFD] h-">{children}</div>
      <p
        className="pt-4 m-0 p-0 text-center text-[14px] font-[400] font-[work sans] text-[background: #1E2329;
]"
      >
        @ 2022 MSF Sales
      </p>
    </div>
  );
}

export default AuthCard;
