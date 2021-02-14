import React from "react";
import Pointer from "./Pointer";

interface MenuProps {
  visible: Boolean;
}
const Solutions: React.FC<MenuProps> = ({ visible }) => {
  return (
    <div
      className={`grid grid-cols-3  max-w-4xl w-md-card bg-dropdown rounded-lg shadow-lg absolute z-10 top-12 left-20  ${
        visible ? "scale-100" : "scale-0 opacity-0"
      } transition-transform duration-200 ease-in-out transform `}
    >
      <Pointer position="left-56 -top-2" />
      <div className="col-span-3 grid grid-cols-3">
        <div className="p-8 col-span-1 ">
          <h6 className="text-blue-300 text-xl font-extralight pb-6 border-b border-blue-300 border-opacity-10">
            Integrations
          </h6>
          <ul className="mt-6">
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <img src="/img/salesforce.svg" alt="Salesforce Logo" />
              <span className="ml-2 text-lg">Salesforce</span>
            </li>
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <img src="/img/segment.svg" alt="Salesforce Logo" />
              <span className="ml-2 text-lg">Segment</span>
            </li>
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <img src="/img/hubspot.svg" alt="Salesforce Logo" />
              <span className="ml-2 text-lg">Hubspot</span>
            </li>
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <img src="/img/marketo.svg" alt="Salesforce Logo" />
              <span className="ml-2 text-lg">Marketo</span>
            </li>
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <img src="/img/pardot.svg" alt="Salesforce Logo" />
              <span className="ml-2 text-lg">Pardot</span>
            </li>
          </ul>
        </div>
        <div className="p-8 pb-2 col-span-2 ">
          <h6 className="text-blue-300 text-xl font-extralight pb-6 border-b border-blue-300 border-opacity-10">
            Explore
          </h6>
          <ul className="mt-6">
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <div>
                <h5 className="text-white text-lg mb-1">
                  Clearbit for Marketers
                </h5>
                <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                  Generate and convert more leads throught the funnel
                </p>
              </div>
            </li>
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <div>
                <h5 className="text-white text-lg mb-1">Clearbit for Sales</h5>
                <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                  Close more deails with better business intelligence
                </p>
              </div>
            </li>
            <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
              <div>
                <h5 className="text-white text-lg mb-1">Clearbit Batch</h5>
                <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                  Enrich any list in seconds
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="col-span-3 mb-8 mx-10 border-t border-blue-300 border-opacity-10"
        role="button"
      >
        <div className="flex  hover:bg-blue-500 hover:bg-opacity-10 py-4 mt-5 px-5 rounded-lg">
          <img
            src="/img/integrations.svg"
            className="h-6"
            alt="Salesforce Logo"
          />
          <span className="ml-2 text-lg">All Integrations & Partners </span>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
