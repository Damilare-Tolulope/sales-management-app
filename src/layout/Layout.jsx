/** @format */

import React, { useState } from "react";
import SideBar from "../components/SideBar";
import PageViewer from "./PageViewer";
import Header from "./Header";
import "../assets/style/Layout.css";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="root overflow-y-hidden">
        <div
          className={clsx("drawer shadow-lg", {
            drawerOpen: !open,
            drawerClose: open,
          })}
        >
          <div className="mt-1.5 mb-4">
            <div className="flex flex-wrap items-center">
              <div className="w-9/12 flex flex-row justify-center">
                <Link to={"/"}>
                  <img
                    src={require("../assets/images/MSF-Sales.png")}
                    alt="website logo"
                    className={clsx("logo", {
                      hide: open,
                    })}
                  />
                </Link>
              </div>
              <div className="w-3/12 text-center">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={handleDrawerOpen}
                  className={clsx("menuButton", {
                    hide: open,
                  })}
                />
              </div>
            </div>
          </div>

          <SideBar />
        </div>
        <div className="content">
          <header
            className={clsx("appBar shadow-lg", {
              appBarShift: open,
            })}
          >
            <FontAwesomeIcon
              icon={faBars}
              onClick={handleDrawerClose}
              className={clsx("menuButton", {
                hide: !open,
              })}
            />
            <div
              className={clsx("w-1/6", {
                hide: !open,
              })}
            >
              <Link to={"/"}>
                <span className="self-center font-bold whitespace-nowrap text-[#0052CC] text-2xl">
                  MSF Sales
                </span>
              </Link>
            </div>
            <div
              className={clsx("pl-4 w-full", {
                hide: open,
              })}
            >
              <Header />
            </div>
            <div
              className={clsx("pl-4 w-10/12", {
                hide: !open,
              })}
            >
              <Header />
            </div>
          </header>

          <div className="container">
            <PageViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
