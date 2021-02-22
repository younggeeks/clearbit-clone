import React from "react";
import Products from "./Products";
import Solutions from "./Solutions";

const MobileNav = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col">
      <div className="flex">
        <button>Log In </button>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default MobileNav;
