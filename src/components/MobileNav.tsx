import React from "react";
import { useRecoilState } from "recoil";
import { Device, navState } from "../context/atoms";
import Products from "./Products";
import Solutions from "./Solutions";

const MobileNav = () => {
  const [navItem, setNavItem] = useRecoilState(navState);

  return (
    <div
      className={`absolute top-3 left-5 right-5  flex flex-col z-10 transition duration-500 ${
        navItem.device === Device.mobile
          ? "opacity-100 block"
          : "hidden opacity-0"
      }`}
    >
      <div className="rounded-xl overflow-hidden">
        <div className="flex justify-between bg-navy-900 px-4 py-3  items-center">
          <div className="flex space-x-4">
            <button className="text-white bg-navy-800 py-1  px-6 rounded-lg ">
              Log In{" "}
            </button>
            <button className="text-white bg-navy-800  px-6 rounded-lg">
              Get Started
            </button>
          </div>

          <button
            className="h-5"
            onClick={() => setNavItem({ device: Device.none })}
          >
            <img src="/img/close.svg" alt="Close button" />
          </button>
        </div>
        <div className="bg-navy-800">
          {/* <div
            className={`grid   max-w-3xl w-sm-card bg-dropdown rounded-lg shadow-lg absolute z-10 top-12 left-0 ${
              visible ? "scale-100" : "scale-0 opacity-0"
            } transition-transform duration-200 ease-in-out transform `}
          > */}
          {/* <Pointer position="left-44 -top-2  " /> */}
          <div className="p-8">
            <h6 className="text-blue-300 text-xl font-extralight pb-6 border-b border-blue-300 border-opacity-10">
              Products
            </h6>
            <ul className="mt-6">
              <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
                <img
                  src="/img/advertising.svg"
                  alt="Advertising"
                  className="h-7 mr-4 w-auto"
                />
                <div>
                  <h5 className="text-white text-lg mb-1">Advertising</h5>
                  <p className="text-blue-100 opacity-50 font-normal text-md text-opacity-95 leading-relaxed tracking-wide">
                    B2B audience targeting for Facebook Ads and Google
                    Remarketing
                  </p>
                </div>
              </li>
              <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
                <img
                  src="/img/reveal.svg"
                  alt="Advertising"
                  className="h-7 mr-4"
                />

                <div>
                  <h5 className="text-white text-lg mb-1">Reveal</h5>
                  <p className="text-blue-100 opacity-50  text-md text-opacity-95 leading-relaxed tracking-wide">
                    Unmask anonymous web traffic to personalize for target
                    accounts
                  </p>
                </div>
              </li>
              <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
                <img
                  src="/img/enrichment.svg"
                  alt="Advertising"
                  className="h-7 mr-4"
                />

                <div>
                  <h5 className="text-white text-lg mb-1">Enrichment</h5>
                  <p className="text-blue-100 opacity-50  text-md text-opacity-95 leading-relaxed tracking-wide">
                    Turn any email or domain into a full person or company
                    profile
                  </p>
                </div>
              </li>
              <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
                <img
                  src="/img/prospector.svg"
                  alt="Advertising"
                  className="h-7 mr-4"
                />

                <div>
                  <h5 className="text-white text-lg mb-1">Prospector</h5>
                  <p className="text-blue-100 opacity-50  text-md text-opacity-95 leading-relaxed tracking-wide">
                    Discover your ideal accounts and leads with complete contact
                    info
                  </p>
                </div>
              </li>
              <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
                <img
                  src="/img/alerts.svg"
                  alt="Advertising"
                  className="h-7 mr-4"
                />

                <div>
                  <h5 className="text-white text-lg mb-1">Alerts</h5>
                  <p className="text-blue-100 opacity-50  text-md text-opacity-95 leading-relaxed tracking-wide">
                    Notify sales and success when target accounts visit your
                    website
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Solutions  */}
          <div className=" grid grid-cols-1 rounded-xl">
            <div className="p-8 col-span-1 ">
              <h6 className="text-blue-300 text-xl font-extralight pb-6 border-b border-blue-300 border-opacity-10">
                Integrations
              </h6>
              <ul className="mt-6 text-white">
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
                    <p className="text-blue-100 opacity-50  text-md text-opacity-95 leading-relaxed tracking-wide">
                      Generate and convert more leads throught the funnel
                    </p>
                  </div>
                </li>
                <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
                  <div>
                    <h5 className="text-white text-lg mb-1">
                      Clearbit for Sales
                    </h5>
                    <p className="text-blue-100 opacity-50  text-sm text-opacity-95 leading-relaxed tracking-wide">
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
              <span className="ml-2 text-lg text-white">
                All Integrations & Partners{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MobileNav;
