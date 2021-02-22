import React from "react";

const GetstartedForm = () => {
  return (
    <div className=" md:max-w-lg overflow-visible shadow-lg">
      {/* <div className="w-full h-full absolute -right-10 bg-navy-800 z-10 "></div> */}
      <div className="flex flex-col text-white bg-blueGray-700 rounded-lg py-10 px-5 lg:max-w-lg lg:px-10 md:px-3 z-30 ">
        <img
          src="/img/home-logo-alt.svg"
          alt="Home logo"
          className="mb-7 h-16"
        />
        <span className="text-2xl text-center text-blue-100 font-medium">
          Get Started
        </span>

        <form className="space-y-6">
          <label htmlFor="email" className="flex flex-col">
            <span className="text-blue-100 font-medium mb-3">Email</span>
            <input
              type="text"
              id="email"
              placeholder="email@netsolution.de"
              className="h-16 md:h-12 px-4 rounded-lg text-card-body lg:text-sm"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <span className="text-blue-100 font-medium mb-3">Message</span>
            <textarea
              id="message"
              placeholder="What are you hoping to accomplish with Clearbit? "
              className=" px-4 pt-4 rounded-lg lg:text-sm md:text-sm"
              rows={3}
            />
          </label>
          <button className="px-4 text-base  mt-10 lg:mt-14 bg-gradient-to-b from-blue-400 to-blue-500 py-3 border border-indigo-900 shadow rounded-lg w-full">
            Request Demo
          </button>
          <div className="text-center md:text-left">
            <span className="text-sm">or</span>{" "}
            <a href="#" className="text-md">
              Start a free trial
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetstartedForm;
