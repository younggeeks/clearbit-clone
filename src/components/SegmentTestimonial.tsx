import React from "react";
import StoryCard from "./StoryCard";
import TabMenu from "./TabMenu";

const SegmentTestimonial = () => {
  return (
    <div className="self-center flex flex-col items-center">
      <TabMenu selectedTab="B2B" />
      <h3 className="text-card-body text-3xl font-light tracking-wide mt-2 mb-8 md:mb-12 text-center">
        Context to close more deals, more quickly
      </h3>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-10 xl:gap-20 lg:gap-12 lg:mx-5 text-card-body  ">
        <div className="mb-10">
          <StoryCard team={"/img/b2b.jpg"} logo={"/img/segment-full.svg"} />
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex items-center justify-between">
              <div className=" xl:text-lg lg:text-md font-medium mr-8">
                Clearbit is our source of truth
              </div>
            </div>
            <p className="mt-7 tracking-wide leading-loose lg:text-lg">
              Clearbit helps us shorten lead forms, customize chat for web
              visitors, and enrich data to help inform our sales team. It's a
              great product portfolio and quickly becoming the gold standard in
              the data intelligence space.
            </p>
            <div className="flex items-center justify-between mt-8">
              <div>
                <h6 className="text-sm font-medium">Jason Yang</h6>
                <p className="text-sm font-thin">
                  SVP Business Operations, Dialpad
                </p>
              </div>
              <img
                src="/img/dialpad-full.svg"
                alt="Varonis logo"
                className="h-6 mb-5"
              />
            </div>

            <hr className="my-10" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className=" xl:text-lg text-md font-medium mr-8">
                <span className="text-3xl xl:text-4xl mr-2">2700 </span>
                new SQLs per week
              </div>
              <img
                src="/img/intercom-full.svg"
                alt="Intercom logo"
                className="h-6 mb-5"
              />
            </div>
            <p className="mt-7 tracking-wide leading-loose lg:text-lg">
              In less than a month, Intercom increased pipeline by 2700 sales
              qualified leads per week and decreased bounce rates.
            </p>
            <a
              href="#"
              className="flex text-blue-500 font-medium mt-4 md:text-md"
            >
              Read Story <img src="/img/arrow.svg" alt="chevron right" />{" "}
            </a>

            <hr className="my-10" />
          </div>
          <div className="pb-10">
            <div className="flex items-center">
              <div className=" text-lg font-medium mr-8">
                The data we need for automation
              </div>
            </div>
            <p className="mt-7 tracking-wide leading-loose lg:text-lg">
              We use Clearbit to route leads based on location or industry,
              score leads, and train machine learning models. Clearbit stands
              out as having the most straight-forward, elegant and
              well-documented sales data.
            </p>

            <div className="flex items-center justify-between mt-8">
              <div>
                <h6 className="text-sm font-medium">Dharmesh Shah</h6>
                <p className="text-sm font-thin">CTO and Co-Founder, HubSpot</p>
              </div>
              <img
                src="/img/hubspot-full.svg"
                alt="Hubspot logo"
                className="h-6 mb-5"
              />
            </div>
            <a
              href="#"
              className="flex text-blue-500 font-medium mt-4 md:text-md"
            >
              Read Story <img src="/img/arrow.svg" alt="chevron right" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex max-w-3xl items-center justify-between md:space-x-32 space-x-4 mb-40">
        <img
          src="/img/asana-mono.svg"
          alt="Asana Logo"
          className="xl:h-12 lg:h-12 md:h-10 h-8 w-auto opacity-50"
        />
        <img
          src="/img/atlassian-mono.svg"
          alt="Atlasian Logo"
          className="xl:h-12 lg:h-12 md:h-10 h-8 w-auto opacity-50"
        />
        <img
          src="/img/flexport-mono.svg"
          alt="Flexport Logo"
          className="xl:h-12 lg:h-12 md:h-10 h-8 w-auto opacity-50"
        />
      </div>
    </div>
  );
};

export default SegmentTestimonial;
