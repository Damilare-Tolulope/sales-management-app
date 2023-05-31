/**
 * /* eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [active, setActive] = useState(false);
  const [state, setState] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleToggle = () => {
    setState(!state);
  };

  return (
    <nav className="bg-white border-0 px-2 sm:px-4 py-4">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} className="flex items-center">
          <span className="self-center font-bold whitespace-nowrap text-[#0052CC] text-3xl">
            MSF Sales
          </span>
        </Link>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#0052CC] dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={handleClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`${active ? "" : "hidden"} w-full md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="flex flex-col content-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                to={"/"}
                className="block py-2 pl-3 pr-4 text-[#0052CC] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#0052CC] md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="block py-2 pl-3 pr-4 text-[#0052CC] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#0052CC] md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer" onClick={handleToggle}>
              <span className="text-[#0052CC] mr-2">Support</span>
              <FontAwesomeIcon icon={faAngleDown} className="text-[#0052CC]" />
            </li>
            <li>
              <Link to={"/sign-in"}>
                <button className="btn py-2 px-4 rounded text-white bg-[#0052CC]">
                  Log In
                </button>
              </Link>
            </li>
          </ul>

          {state === true ? (
            <div className="w-[200px] border absolute z-[9999] bg-white right-2 px-2 py-2">
              <ul>
                <li className="mb-2">
                  <Link
                    to={"/contact"}
                    className="block py-2 pl-3 pr-4 text-[#0052CC] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#0052CC] md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Help
                  </Link>
                  <li className="mb-2">
                    <Link
                      to={"/faqs"}
                      className="block py-2 pl-3 pr-4 text-[#0052CC] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#0052CC] md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to={"/privacy-policy"}
                      className="block py-2 pl-3 pr-4 text-[#0052CC] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-[#0052CC] md:dark:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
