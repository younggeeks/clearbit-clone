import React, { useState } from "react";

const TabMenu = ({ selectedTab }) => {
  return (
    <div className="flex md:space-x-8 my-12 flex-col md:flex-row items-center">
      <button
        className={`${
          selectedTab === "GROWTH_MARKETING"
            ? "flex text-card-body  shadow-md px-4 py-3 rounded-lg items-center focus:outline-none"
            : "flex  text-blue-500 focus:outline-none outline-none px-4 py-3 rounded-lg text-sm items-center bg-transparent"
        }  `}
      >
        {" "}
        <svg
          width="94"
          height="94"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 94 94"
          className={`h-6 w-7 text-light-900 mr-3`}
        >
          <path
            d="M80.885 11.998c0-1.695-1.603-2.605-2.913-1.541-11.11 8.972-22.354 13.474-33.732 13.505H14v30.833h11.385L32.5 84l9.74-2.656-1.138-26.549h3.138c11.378-.03 22.622 4.44 33.732 13.413 1.31 1.063 2.913.154 2.913-1.527V11.998z"
            fillRule="evenodd"
          ></path>
        </svg>{" "}
        Growth Marketing
      </button>
      <button
        className={`${
          selectedTab === "ENTERPRISE_MARKETING"
            ? "flex text-card-body  shadow-md px-4 py-3 rounded-lg  items-center focus:outline-none"
            : "flex  text-blue-500 focus:outline-none outline-none px-4 py-3 rounded-lg  items-center bg-transparent"
        }  `}
      >
        {" "}
        <svg
          width="94"
          height="94"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 94 94"
          fill="currentColor"
          className="h-6 w-7 text-light-900 mr-3"
        >
          <path
            d="M15 45h14v36H15V45zm25-15h14v51H40V30zm25-19h14v70H65V11z"
            fillRule="evenodd"
          ></path>
        </svg>
        Enterprise Marketing
      </button>
      <button
        className={`${
          selectedTab === "B2B"
            ? "flex text-card-body  shadow-md px-4 py-3 rounded-lg  items-center focus:outline-none"
            : "flex  text-blue-500 focus:outline-none outline-none px-4 py-3 rounded-lg  items-center bg-transparent"
        }  `}
      >
        {" "}
        <svg
          width="94"
          height="94"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 94 94"
          fill="currentColor"
          className="h-6 w-7 text-light-900 mr-3"
        >
          <g fillRule="evenodd">
            <path d="M47 94c25.957 0 47-21.043 47-47S72.957 0 47 0 0 21.043 0 47s21.043 47 47 47zm0-14c-18.225 0-33-14.775-33-33s14.775-33 33-33 33 14.775 33 33-14.775 33-33 33z"></path>
            <path d="M47.5 69C59.374 69 69 59.374 69 47.5S59.374 26 47.5 26 26 35.626 26 47.5 35.626 69 47.5 69zm0-14a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"></path>
          </g>
        </svg>
        B2B Sales
      </button>
    </div>
  );
};

export default TabMenu;
