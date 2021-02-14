import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div>
          Join thousands of companies who rely on Clearbit to turn data into
          demand
        </div>
        <button className="px-4 text-base w-40 mt-14 bg-gradient-to-b from-btn-start to-btn-end py-3 border border-indigo-900 shadow rounded-lg">
          Get Started
        </button>
      </div>
      <div className="grid grid-rows-7 grid-cols-4 gap-4">
        {/* FIRST ROW  */}
        <div className="bg-white flex items-center justify-center h-16 w-16 rounded-lg col-start-2 col-end-5 animate-heart transform hover:scale-110 ">
          <img
            src="/img/asana.svg"
            className="object-cover h-1/2 w-auto "
            alt=""
          />
        </div>
        {/* END FIRST ROW  */}

        {/* ========== SECOND ROW   */}
        <div className="flex justify-between h-44 w-4/5 items-center col-span-4 col-start-2">
          <div className="bg-white self-center flex items-center justify-center h-12 w-12 rounded-lg col-start-2 animate-heart-4 transform ">
            <img
              src="/img/chorus.svg"
              className="object-cover h-1/2 w-auto "
              alt=""
            />
          </div>

          <div className="bg-white flex items-center justify-center h-24 w-24 rounded-lg col-start-2 animate-heart-4 transform ">
            <img
              src="/img/okta.svg"
              className="object-fit h-16  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white self-start flex items-center justify-center h-12 w-12 rounded-lg col-start-2 animate-heart-4 transform ">
            <img
              src="/img/outreach.svg"
              className="object-fit  w-auto "
              alt=""
            />
          </div>
        </div>

        {/* END SECOND ROW  */}

        {/* START THIRD ROW  */}
        <div className="flex justify-between h-40 -mt-10  items-center col-span-4">
          <div className="bg-white self-end flex items-center justify-center h-20 w-20 rounded-lg col-start-2 animate-heart-3 transform ">
            <img
              src="/img/pantheon.svg"
              className="object-cover h-12 w-auto "
              alt=""
            />
          </div>

          <div className="bg-white justify-self-end flex items-center justify-center h-20 w-20 rounded-lg col-start-2 animate-heart-3 transform ">
            <img
              src="/img/segment-.svg"
              className="object-fit h-12  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white self-end flex items-center justify-center h-20 w-20 rounded-lg col-start-2 animate-heart-3 transform ">
            <img
              src="/img/intercom.svg"
              className="object-fit h-8  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white self-start flex items-center justify-center h-16 w-16   rounded-lg col-start-2 animate-heart-3 transform ">
            <img
              src="/img/notion.svg"
              className="object-fit h-10  w-auto "
              alt=""
            />
          </div>
        </div>

        {/* START FOURTH ROW  */}
        <div className="flex justify-between h-40 items-center col-span-4">
          <div className="bg-white self-center flex items-center justify-center h-12 w-12 rounded-lg col-start-2 animate-heart-2 transform ">
            <img
              src="/img/atlassian.svg"
              className="object-cover h-1/2 w-auto "
              alt=""
            />
          </div>

          <div className="bg-white flex self-start items-center justify-center h-16 w-16 rounded-lg col-start-2 animate-heart-2 transform ">
            <img
              src="/img/livestorm.svg"
              className="object-fit h-5  w-auto "
              alt=""
            />
          </div>
          <div className="bg-white self-start flex items-center justify-center h-16 w-16 rounded-lg col-start-2 animate-heart-2 transform ">
            <img
              src="/img/elastic.svg"
              className="object-fit h-8 w-auto "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
