import React from "react";

interface MenuProps {
  visible: Boolean;
}
import Pointer from "./Pointer";
const WhyClearbit: React.FC<MenuProps> = ({ visible }) => {
  return (
    <div
      className={`grid grid-cols-2  max-w-3xl w-large-card bg-dropdown rounded-lg shadow-lg absolute z-10 top-12 -left-80 ${
        visible ? "scale-100" : "scale-0 opacity-0"
      } transition-transform duration-200 ease-in-out transform `}
    >
      <Pointer position="left-pointer -top-2" />
      <div className="p-8 relative">
        <h6 className="text-blue-300 text-xl font-extralight pb-6 border-b border-blue-300 border-opacity-10">
          Clearbit
        </h6>
        <ul className="mt-6">
          <li className="bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <div>
              <h5 className="text-white text-lg mb-1">Our Approach</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                Why the world's top companies choose Clearbit
              </p>
            </div>
          </li>
          <li className="bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <div>
              <h5 className="text-white text-lg mb-1">Our Data</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                How you get the most accurate and up-to-date data
              </p>
            </div>
          </li>
          <li className="bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <div>
              <h5 className="text-white text-lg mb-1">Our Team</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                Meet the people building products to help your business grow
              </p>
            </div>
          </li>
          <li className="bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <div>
              <h5 className="text-white text-lg mb-1">Our Blog</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                The latest news, feature releases, and how to grow with data
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="p-8">
        <h6 className="text-blue-300 text-xl font-extralight pb-6 border-b border-blue-300 border-opacity-10">
          Books
        </h6>
        <ul className="mt-6">
          <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <img
              src="/img/ic.png"
              alt="From IC to Leader"
              className="w-12 h-16 mr-4 object-cover"
            />
            <div>
              <h5 className="text-white text-lg mb-1">From IC to leader</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                B2B market leaders share their career paths
              </p>
            </div>
          </li>
          <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <img
              src="/img/manager.png"
              alt="From IC to Leader"
              className="w-12 h-16 mr-4 object-fit"
            />
            <div>
              <h5 className="text-white text-lg mb-1">
                The Manager's Handbook
              </h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                Clearbit's guite to effective management
              </p>
            </div>
          </li>
          <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <img
              src="/img/marketing.png"
              alt="From IC to Leader"
              className="w-12 h-16 mr-4 object-fit"
            />
            <div>
              <h5 className="text-white text-lg mb-1">Data-Driven Handbook</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                How B2B marketers use data throughout the funnel to grow faster
              </p>
            </div>
          </li>
          <li className="flex items-center bg-transparent hover:bg-blue-500 hover:bg-opacity-10 p-3 rounded-lg cursor-pointer transition-colors duration-100">
            <img
              src="/img/sales.png"
              alt="From IC to Leader"
              className="w-12 h-16 mr-4 object-fit"
            />
            <div>
              <h5 className="text-white text-lg mb-1">Data-Driven Sales</h5>
              <p className="text-blue-200 font-thin text-sm text-opacity-95 leading-relaxed tracking-wide">
                How high-growth B2B companies optimize the sales process
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyClearbit;
