import React, { useState } from "react";
import Link from "next/link";
import WhyClearbit from "./WhyClearbit";
import Products from "./Products";
import Solutions from "./Solutions";
import { WHY_CLEARBIT, PRODUCTS, SOLUTIONS } from "../utils/constants";
import HeroSection from "./Hero";
import MobileNav from "./MobileNav";

const ClearbitHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <div className="bg-gradient-to-br from-cyanish to-bluish h-hero mb-12 lg:mb-32 px-10  lg:px-10 xl:px-0">
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="h-20 flex items-center justify-between">
          <img
            src="/img/clearbit-logo-clear.png"
            alt="Clearbit Logo"
            className="h-8"
          />

          <button
            className="block md:hidden lg:hidden xl:hidden "
            onClick={() => {}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <button
            className="hidden md:block lg:hidden xl:hidden "
            onClick={() => {
              setSelectedMenu(selectedMenu === PRODUCTS ? "" : PRODUCTS);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="lg:flex lg:opacity-100  text-white font-normal text-sm items-center group relative hidden ">
            <ul className="lg:flex  space-x-12 hidden  ">
              <li
                className="flex items-center cursor-pointer transform hover:scale-110  transition-transform duration-150 ease-in-out relative "
                onClick={(e) => {
                  setSelectedMenu(
                    selectedMenu === WHY_CLEARBIT ? "" : WHY_CLEARBIT
                  );
                }}
              >
                <Link href="/">Why Clearbit?</Link>

                <svg
                  height="18"
                  viewBox="0 0 9 18"
                  width="9"
                  color="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-90 ml-2 h-3 font-bold opacity-0 group-hover:opacity-100 transition duration-200"
                >
                  <path
                    d="m374.42428 62.6876153 7.191971-5.8680955c.330666-.2690126.46003-.6612896.339362-1.0290642-.120668-.3677745-.473036-.6551728-.92437-.7539348-.451334-.0987619-.933066.0061168-1.263732.2751295l-6.26747 5.1141074-6.26747-5.1141074c-.511166-.4158869-1.339431-.4154817-1.849982.000905-.510552.4163867-.510055 1.0910777.001111 1.5069645l7.191775 5.8680955c.245007.1999942.577614.3123847.924468.3123847.346853 0 .679461-.1123905.924468-.3123847z"
                    fill="#d7dfe7"
                    transform="matrix(0 -1 1 0 -54.5 382.5)"
                  />
                </svg>
              </li>
              <li
                className="flex items-center cursor-pointer transform hover:scale-110  transition-transform duration-150 ease-in-out"
                onClick={(e) => {
                  setSelectedMenu(selectedMenu === PRODUCTS ? "" : PRODUCTS);
                }}
              >
                <Link href="/">Products</Link>
                <svg
                  height="18"
                  viewBox="0 0 9 18"
                  width="9"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-90 ml-2 h-3 font-bold opacity-0 group-hover:opacity-100 transition duration-200"
                >
                  <path
                    d="m374.42428 62.6876153 7.191971-5.8680955c.330666-.2690126.46003-.6612896.339362-1.0290642-.120668-.3677745-.473036-.6551728-.92437-.7539348-.451334-.0987619-.933066.0061168-1.263732.2751295l-6.26747 5.1141074-6.26747-5.1141074c-.511166-.4158869-1.339431-.4154817-1.849982.000905-.510552.4163867-.510055 1.0910777.001111 1.5069645l7.191775 5.8680955c.245007.1999942.577614.3123847.924468.3123847.346853 0 .679461-.1123905.924468-.3123847z"
                    fill="#d7dfe7"
                    transform="matrix(0 -1 1 0 -54.5 382.5)"
                  />
                </svg>
              </li>
              <li
                className="flex items-center cursor-pointer transform hover:scale-110  transition-transform duration-150 ease-in-out"
                onClick={(e) => {
                  setSelectedMenu(selectedMenu === SOLUTIONS ? "" : SOLUTIONS);
                }}
              >
                <Link href="/">Solutions</Link>
                <svg
                  height="18"
                  viewBox="0 0 9 18"
                  width="9"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-90 ml-2 h-3 font-bold opacity-0 group-hover:opacity-100 transition duration-200"
                >
                  <path
                    d="m374.42428 62.6876153 7.191971-5.8680955c.330666-.2690126.46003-.6612896.339362-1.0290642-.120668-.3677745-.473036-.6551728-.92437-.7539348-.451334-.0987619-.933066.0061168-1.263732.2751295l-6.26747 5.1141074-6.26747-5.1141074c-.511166-.4158869-1.339431-.4154817-1.849982.000905-.510552.4163867-.510055 1.0910777.001111 1.5069645l7.191775 5.8680955c.245007.1999942.577614.3123847.924468.3123847.346853 0 .679461-.1123905.924468-.3123847z"
                    fill="#d7dfe7"
                    transform="matrix(0 -1 1 0 -54.5 382.5)"
                  />
                </svg>
              </li>
              <li className="transform hover:scale-110  transition-transform duration-150 ease-in-out ">
                <Link href="/">Customers</Link>
              </li>
              <li className="transform hover:scale-110  transition-transform duration-150 ease-in-out ">
                <Link href="/">Pricing</Link>
              </li>
            </ul>

            <div className="space-x-4 ml-24 lg:flex items-center hidden ">
              <div className="transform hover:scale-110  transition-transform duration-150 ease-in-out ">
                <Link href="/">Log In</Link>
              </div>
              <button className="font-light border border-gray-100 px-3 py-2 rounded-lg transform hover:scale-105  transition-transform duration-150 ease-in-out ">
                Get Started
              </button>
            </div>
            <WhyClearbit visible={selectedMenu === WHY_CLEARBIT} />
            <Products visible={selectedMenu === PRODUCTS} />
            <Solutions visible={selectedMenu === SOLUTIONS} />
            {/* <MobileNav /> */}
          </nav>
        </div>
        <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-white text-5xl font-extralight font-sans mt-9">
          <HeroSection />
        </main>
      </div>
    </div>
  );
};

export default ClearbitHeader;
