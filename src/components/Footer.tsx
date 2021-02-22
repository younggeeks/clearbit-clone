import React from "react";

const Footer = () => {
  return (
    <div className="bg-navy-800 md:h-hero pb-10 md:pb-0">
      <div className=" md:max-w-6xl md:mx-auto  pt-20 pl-4 md:px-8">
        <div className="space-y-10 md:space-y-0 md:flex md:justify-between">
          <div>
            <h4 className="text-white text-xl mb-3 font-light">Solutions</h4>
            <ul className="space-y-3 ">
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Batch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-3 font-light">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Alerts
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Enrichment
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Prospector
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Connect
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Reveal
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Risk
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Forms
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Logo API
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Autocomplete API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-3 font-light">Information</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Data Attributes
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Data.com Comparison
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-3 font-light">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-footer-link font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl mb-3 font-light">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Claim
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-footer-link font-medium">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" border-t  border-gray-300 border-opacity-10 mt-16 pt-6 grid mx-auto md:flex md:justify-between justify-center justify-items-center">
          <div className="flex items-center space-x-8 ">
            <img
              src="/img/clearbit-light.png"
              alt="ClearbitLogo"
              className="h-6"
            />
            <span className="text-gray-400 text-xs break-normal">
              &copy; 2021 Clearbit
            </span>
          </div>
          <a href="#" className="text-white mt-4 md:mt-0">
            Do Not Sell My Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
