/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Setting from "./component/Setting";
import Profile from "./Profile";
import Security from "./Security";

function Settings() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/security/*" element={<Security />} />
      </Routes>
    </div>
  );
}

export default Settings;
