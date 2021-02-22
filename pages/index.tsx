import Head from "next/head";
import React from "react";
import ClearbitHeader from "../src/components/ClearbitHeader";
import Footer from "../src/components/Footer";
import FrameTestimonial from "../src/components/FrameTestimonial";
import HorizontalCard from "../src/components/HorizontalCard";
import MobileNav from "../src/components/MobileNav";
import RequestDemo from "../src/components/RequestDemo";
import SegmentTestimonial from "../src/components/SegmentTestimonial";
import TealiumTestimonial from "../src/components/TealiumTestimonial";

export default function Home() {
  return (
    <div className="relative z-50">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>
          Discover How These Clearbit Customers Turn Data Into Demand | Clearbit
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <MobileNav /> */}
        <ClearbitHeader />
        <div className="lg:max-w-6xl lg:mx-auto flex flex-col mx-4 my-10">
          <HorizontalCard />
          <FrameTestimonial />
          <TealiumTestimonial />
          <SegmentTestimonial />
        </div>
        <RequestDemo />
      </main>
      <Footer />
    </div>
  );
}
