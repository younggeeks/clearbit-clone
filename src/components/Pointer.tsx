import React from "react";

const Pointer = ({ position }) => {
  return (
    <div
      className={`h-6 w-4 absolute hidden md:block  bg-dropdown transform rotate-45 ${position}`}
    ></div>
  );
};

export default Pointer;
