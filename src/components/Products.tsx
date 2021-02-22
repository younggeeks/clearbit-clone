import React from "react";
import Pointer from "./Pointer";
interface MenuProps {
  visible: Boolean;
}
const Products: React.FC<MenuProps> = ({ visible }) => {
  return (
    <div
      className={`grid   max-w-3xl w-sm-card bg-dropdown rounded-lg shadow-lg absolute z-10 top-12 left-0 ${
        visible ? "scale-100" : "scale-0 opacity-0"
      } transition-transform duration-200 ease-in-out transform `}
    >
      <Pointer position="left-44 -top-2  " />
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

export default Products;
