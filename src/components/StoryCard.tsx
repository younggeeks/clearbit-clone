import React from "react";

const StoryCard = ({ team, logo }) => {
  return (
    <div className="flex flex-col shadow-xl md:shadow-2xl rounded-3xl overflow-hidden lg:h-lg-card h-sm-card xl:m-auto ">
      <img
        // src="/img/zenefits-team.jpg"
        src={team}
        alt="Thumbnail"
        className="object-cover lg:object-center w-full md:block"
      />
      <div className="px-4 py-5 lg:px-14 lg:py-12 md:px-8">
        <img src={logo} className="lg:h-9 h-7 lg:mb-8 mb-6" alt="Logo" />
        <p className=" text-card-body font-light lg:text-lg  leading-8 text-md-card">
          Using Clearbit Advertising, Frame.io unlocked B2B advertising on
          Facebook, getting more impressions with qualified leads and scaling
          prospecting campaigns — thanks to dynamic audiences (no more manual
          CSVs) and up to triple the audience match rates.
        </p>
        <a href="#" className="flex text-blue-500 font-medium mt-4  md:text-md">
          Read Story <img src="/img/arrow.svg" alt="chevron right" />{" "}
        </a>
      </div>
    </div>
  );
};

export default StoryCard;
