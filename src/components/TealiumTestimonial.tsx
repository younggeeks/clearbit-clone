import React from "react";
import StoryCard from "./StoryCard";
import TabMenu from "./TabMenu";

const TealiumTestimonial = () => {
  return (
    <div className="self-center flex flex-col items-center">
      <TabMenu selectedTab="ENTERPRISE_MARKETING" />
      <h3 className="text-card-body text-3xl font-light tracking-wide mt-2 mb-8 md:mb-12 text-center">
        Grow more target accounts for the sales team
      </h3>
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-10 xl:gap-20 lg:gap-12 lg:mx-5 text-card-body  ">
        <div className="mb-10">
          <StoryCard
            team={"/img/enterprise-marketing.jpg"}
            logo={"/img/tealium-full.svg"}
          />
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex items-center justify-between">
              <div className=" xl:text-lg lg:text-md font-medium mr-8">
                <span className="text-3xl xl:text-5xl md:text-2xl mr-2">
                  1/2
                </span>
                <br className="lg:hidden md:block block" />
                the CPC of LinkedIn
              </div>
              <img
                src="/img/airbase-logo-full.svg"
                alt="Airbase Logo"
                className="h-6 mb-5"
              />
            </div>
            <p className="mt-7 tracking-wide leading-loose lg:text-lg">
              Airbase builds awareness with target accounts on Facebook and
              Instagram that they couldn't reach in the past.
            </p>
            <a
              href="#"
              className="flex text-blue-500 font-medium mt-4 md:text-md"
            >
              Read Story <img src="/img/arrow.svg" alt="chevron right" />{" "}
            </a>

            <hr className="my-10" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className=" xl:text-lg text-md font-medium mr-8">
                <span className="text-3xl xl:text-4xl mr-2">70% </span>
                lift in form conversions
              </div>
              <img src="/img/gong.png" alt="gong logo" className="h-10 mb-5" />
            </div>
            <p className="mt-7 tracking-wide leading-loose lg:text-lg">
              Gong increased demo requests by 5x, generated hundreds of
              qualified opportunities, and accelerated deals by fast-tracking
              best-fit leads.
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
                Focus on more meaningful KPIs.
              </div>
            </div>
            <p className="mt-7 tracking-wide leading-loose lg:text-lg">
              We don’t want to attract everyone (especially in paid marketing) –
              we want to focus on the target accounts, and Clearbit helps us
              determine if we’re doing that efficiently.
            </p>

            <div className="flex items-center justify-between mt-8">
              <div>
                <h6 className="text-sm font-medium">Rob Sobers</h6>
                <p className="text-sm font-thin">
                  Senior Director of Marketing, Varonis
                </p>
              </div>
              <img
                src="/img/varonis-full.svg"
                alt="Varonis logo"
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
          src="/img/pantheon-mono.svg"
          alt="Pantheon Logo"
          className="xl:h-12 lg:h-12 md:h-12 h-8 w-auto opacity-50"
        />
        <img
          src="/img/elastic-mono.svg"
          alt="Elastic Logo"
          className="xl:h-12 lg:h-12 md:h-12 h-8 w-auto opacity-50"
        />
        <img
          src="/img/okta-mono.svg"
          alt="Okta Logo"
          className="xl:h-12 lg:h-12 md:h-12 h-8 w-auto opacity-50"
        />
      </div>
    </div>
  );
};

export default TealiumTestimonial;
