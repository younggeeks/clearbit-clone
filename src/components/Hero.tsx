import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:items-start z-100">
        <div className="text-3xl text-center md:text-4xl md:text-left flex flex-col font-normal md:font-light ">
          Join thousands of companies who rely on Clearbit to turn data into
          demand
        </div>
        <button className="px-4 text-base w-40 mt-8 lg:mt-14 bg-gradient-to-b from-btn-start to-btn-end py-3 border border-indigo-900 shadow rounded-lg">
          Get Started
        </button>
      </div>
      <div className="grid grid-rows-7 grid-cols-4 gap-1 lg:gap-4 mt-20 md:mt-8 lg:mt-8">
        {/* FIRST ROW  */}
        <div className="bg-white flex items-center -translate-x-48  justify-center h-10 w-10 lg:h-16 lg:w-16  rounded-lg col-start-2 lg:col-start-2 col-end-5 animate-heart transform hover:scale-110 ">
          <img
            src="/img/asana.svg"
            className="object-cover h-1/2 w-auto "
            alt=""
          />
        </div>
        {/* END FIRST ROW  */}

        {/* ========== SECOND ROW   */}
        <div className="flex justify-between h-20 md:h-44 w-full items-center col-span-4 col-start-2 -mt-12 lg:mt-0 md:mt-0">
          <div className="bg-white self-center  md:hidden flex lg:flex items-center justify-center h-12 w-12 rounded-lg col-start-2 animate-heart-4 transform -ml-20 md:ml-0  ">
            <img
              src="/img/chorus.svg"
              className="object-cover h-1/2 w-auto "
              alt=""
            />
          </div>

          <div className="bg-white flex items-center justify-center h-16 w-16 -translate-x-20 md:ml-14  md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-2xl col-start-2 md:col-start-3 lg:col-start-2 animate-heart-4 transform ml-6 ">
            <img
              src="/img/okta.svg"
              className="object-fit h-10 md:h-16 lg:16  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white self-start flex items-center justify-center h-12 w-12 lg:h-12 lg:w-12 rounded-lg col-start-2 animate-heart-4 transform ">
            <img
              src="/img/outreach.svg"
              className="object-fit h-1/2 w-auto "
              alt=""
            />
          </div>
        </div>

        {/* END SECOND ROW  */}

        {/* START THIRD ROW  */}
        <div className="flex justify-between h-20 md:h-36 lg:h-40 md:-mt-10 -mt-4  items-center col-span-4 ">
          <div className="bg-white self-end flex items-center justify-center h-12 w-12 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-lg col-start-2 animate-heart-3 transform md:-ml-20 ">
            <img
              src="/img/pantheon.svg"
              className="object-cover h-12 md:h-10 lg:h-12 w-auto "
              alt=""
            />
          </div>

          <div className="bg-white lg:self-end md:self-start  flex  items-center justify-center md:h-16 md:w-16 lg:h-20 lg:w-20 h-10 w-10 rounded-lg col-start-2 animate-heart-3 transform  lg:mb-10">
            <img
              src="/img/segment-.svg"
              className="object-fit h-6  md:h-8 lg:h-12  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white self-end flex items-center justify-center h-12 w-12 lg:h-20 lg:w-20 rounded-lg col-start-2 animate-heart-3 transform ">
            <img
              src="/img/intercom.svg"
              className="object-fit  h-6 lg:h-8  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white lg:self-start self-end flex items-center justify-center h-12 w-12 lg:h-16 lg:w-16   rounded-lg col-start-2 animate-heart-3 transform ">
            <img
              src="/img/notion.svg"
              className="object-fit h-8 lg:h-10  w-auto "
              alt=""
            />
          </div>
        </div>

        {/* START FOURTH ROW  */}
        <div className="flex justify-between h-28 md:h-36 lg:h-40 items-center col-span-4">
          <div className="bg-white lg:self-center self-end flex items-center justify-center h-12 w-12 rounded-lg col-start-2 animate-heart-2 transform lg:ml-6">
            <img
              src="/img/atlassian.svg"
              className="object-cover h-1/2 w-auto "
              alt=""
            />
          </div>

          <div className="bg-white flex self-center lg:self-start items-center justify-center h-12 w-12 lg:h-16 lg:w-16 rounded-lg col-start-2 animate-heart-2 transform lg:mr-20 ">
            <img
              src="/img/livestorm.svg"
              className="object-fit h-4  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white self-end  lg:self-center flex items-center justify-center h-12 w-12 lg:h-12 lg:w-12 rounded-lg col-start-2 animate-heart-2 transform ">
            <img
              src="/img/elastic.svg"
              className="object-fit lg:h-6 h-6 w-auto "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
