import React from "react";
import { useRecoilState } from "recoil";
import { Device, navState } from "../context/atoms";

const TabletNav = () => {
  const [navItem, setNavItem] = useRecoilState(navState);
  return (
    <div
      className={`absolute top-3 bg-navy-800 left-5 right-5  flex flex-col z-10 transition duration-500 ${
        navItem.device === Device.tablet
          ? "opacity-100 block"
          : "hidden opacity-0"
      }`}
    >
      <div className="p-8">
        <div className="flex justify-between border-b border-blue-300 border-opacity-10">
          <h6 className="text-blue-300 text-xl font-extralight pb-6 ">
            Products
          </h6>
          <button
            className="h-5"
            onClick={() => setNavItem({ device: Device.none })}
          >
            <img src="/img/close.svg" alt="Close button" />
          </button>
        </div>
        <ul className="mt-6">
          <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <img
              src="/img/advertising.svg"
              alt="Advertising"
              className="h-7 mr-4 w-auto"
            />
            <div>
              <h5 className="text-white text-lg mb-1">Advertising</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                B2B audience targeting for Facebook Ads and Google Remarketing
              </p>
            </div>
          </li>
          <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <img src="/img/reveal.svg" alt="Advertising" className="h-7 mr-4" />

            <div>
              <h5 className="text-white text-lg mb-1">Reveal</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                Unmask anonymous web traffic to personalize for target accounts
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
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                Turn any email or domain into a full person or company profile
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
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                Discover your ideal accounts and leads with complete contact
                info
              </p>
            </div>
          </li>
          <li className="flex bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <img src="/img/alerts.svg" alt="Advertising" className="h-7 mr-4" />

            <div>
              <h5 className="text-white text-lg mb-1">Alerts</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                Notify sales and success when target accounts visit your website
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TabletNav;
