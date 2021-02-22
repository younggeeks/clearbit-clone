import React from "react";
import GetstartedForm from "./GetstartedForm";
import QuoteSection from "./QuoteSection";

const RequestDemo = () => {
  return (
    <div className="grid grid-cols-1 lg:gap-32 md:gap-20 md:grid-cols-2 w-full bg-navy-900 py-16 px-5 lg:px-10 md:px-6">
      <QuoteSection />
      <div className="mt-16">
        <GetstartedForm />
      </div>
    </div>
  );
};

export default RequestDemo;
