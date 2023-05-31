import React, { useState } from "react";
import ResetPassword from "./ResetPassword";
import ResetPin from "./ResetPin";
import { Route, Routes } from "react-router-dom";
import SecurityNav from "./SecurityNav";
import Biometrics from "./Biometrics";

function Security() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SecurityNav />} />
        <Route path="/password" element={<ResetPassword />} />
        <Route
          path="/pin"
          element={<ResetPin toggle={toggle} setToggle={setToggle} />}
        />
        <Route
          path="/biometrics"
          element={<Biometrics toggle={toggle} setToggle={setToggle} />}
        />
      </Routes>
    </div>
  );
}

export default Security;
