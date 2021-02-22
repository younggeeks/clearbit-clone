import React from "react";

const HorizontalCard = () => {
  return (
    <div className="flex shadow-2xl rounded-2xl overflow-hidden mb-12 lg:mb-32 h-78 md:mx-4 lg:mx-6">
      <img
        src="/img/zenefits-team.jpg"
        alt="Thumbnail"
        className="object-cover lg:object-center w-72 md:w-48 lg:w-80  xl:w-96 hidden md:block"
      />
      <div className="px-4 py-5 md:px-10 lg:px-14 lg:py-12">
        <img src="/img/zenefits-logo.svg" className="h-9 mb-8" alt="Logo" />
        <p className=" text-card-body font-light text-lg leading-8">
          Using Clearbit Advertising, Zenefits could finally target their ideal
          customer profile on Facebook. They drove larger companies with greater
          potential ACV and saw a 20% increase in conversion from prospect to
          qualified lead.
        </p>
        <a href="#" className="flex text-blue-500 font-medium mt-4">
          Read Story <img src="/img/arrow.svg" alt="chevron right" />{" "}
        </a>
      </div>
    </div>
  );
};

export default HorizontalCard;
