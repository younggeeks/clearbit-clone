import React from "react";

const QuoteSection = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-md mx-auto">
      <h4 className="text-white text-4xl text-center tracking-wide">
        See why the world’s best companies use Clearbit to become truly
        data-driven
      </h4>
      <img
        src="/img/schedule-meeting-quotation.png"
        alt="Qoute"
        className="w-5 my-6"
      />
      <p className="text-gray-400 text-lg text-center italic font-light leading-relaxed tracking-wide">
        Clearbit's company, geo, and demographic intel enables our sales and
        analytics teams to function at maximum capacity. I don't know what we'd
        do without them.
      </p>
      <div className="flex text-blue-100 mt-5 mb-10 items-center">
        <img
          src="/img/avatar.png"
          alt="avatar"
          className="h-16 w-16 rounded-full object-cover mr-5"
        />
        <div className="space-y-1 font-light leading-relaxed tracking-wide">
          <h5 className="text-navy-300 text-lg font-medium">Samjunior</h5>
          <p className="text-gray-400">Co-founder, Younggeeks</p>
        </div>
      </div>
      <div className="flex justify-between space-x-5 ">
        <img
          src="/img/segment.png"
          alt="segment logo"
          className="xl:h-8 lg:h-8 md:h-6 h-7 w-auto opacity-50"
        />
        <img
          src="/img/asana.png"
          alt="asana logo"
          className="xl:h-8 lg:h-8 md:h-6 h-7 w-auto opacity-50"
        />
        <img
          src="/img/intercom.png"
          alt="intercom logo"
          className="xl:h-8 lg:h-8 md:h-6 h-7 w-auto opacity-50"
        />
        <img
          src="/img/notion_.png"
          alt="Notion logo"
          className="xl:h-8 lg:h-8 md:h-6 h-7 w-auto opacity-50"
        />
      </div>
    </div>
  );
};

export default QuoteSection;
