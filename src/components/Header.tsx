import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-hero-pattern min-h-screen bg-cover">
      <nav className="h-28 flex items-center justify-between container mx-auto ">
        <svg
          width="198"
          height="75"
          viewBox="0 0 198 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12"
        >
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M54.7456 38.7039C51.9702 35.9051 52.2049 36.0004 48.2714 36.0004H23.3592C19.4253 36.0004 19.6605 35.9051 16.8841 38.7039C15.3801 40.2203 6.52414 49.1493 3.60001 52.0983C6.66502 58.3333 11.384 63.4315 17.0678 66.9337C20.4696 63.505 30.6718 53.2186 32.3715 51.5049C33.7644 50.0996 34.3823 49.5561 35.1364 49.3226C35.3776 49.2485 35.5738 49.1968 35.8154 49.1968C36.0622 49.1968 36.2528 49.2485 36.4938 49.3226C37.2483 49.5561 37.8658 50.0996 39.2587 51.5049C40.9584 53.2186 51.161 63.505 54.562 66.9337C60.2468 63.4315 64.9656 58.3333 68.0309 52.0983C65.1061 49.1493 56.2501 40.2203 54.7456 38.7039"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M18.9487 34.9368C19.9511 33.8457 19.8109 32.9213 20.794 30.3519C21.6831 28.0291 23.071 25.9767 24.8155 24.3203C27.895 21.3977 31.9022 19.8678 35.9545 19.8674C40.0061 19.8678 44.0134 21.3977 47.0929 24.3203C48.8374 25.9767 50.2257 28.0291 51.1151 30.3519C52.0975 32.9213 51.9573 33.8457 52.9601 34.9368C53.936 35.9999 54.9623 36.2502 58.1544 36.2502H71.9088C71.9088 25.7747 67.4464 16.1849 60.2609 9.5379C53.4886 3.27392 44.7682 0.000899 35.9545 0C27.1404 0.000899 18.4197 3.27392 11.6473 9.5379C4.46155 16.1849 0 25.7747 0 36.2502H13.754C16.9461 36.2502 17.973 35.9999 18.9487 34.9368"
            fill="white"
          />
          <path
            d="M130.438 59H119.531L103.406 30.6875V59H92.4375V13.5H103.406L119.5 41.8125V13.5H130.438V59ZM149.062 59H138.125V13.5H149.062V59ZM195.219 37.1875C195.219 41.625 194.396 45.5521 192.75 48.9688C191.104 52.3854 188.76 55.0208 185.719 56.875C182.698 58.7083 179.25 59.625 175.375 59.625C171.5 59.625 168.062 58.7396 165.062 56.9688C162.062 55.1771 159.719 52.625 158.031 49.3125C156.365 46 155.49 42.1979 155.406 37.9062V35.3438C155.406 30.8854 156.219 26.9583 157.844 23.5625C159.49 20.1458 161.833 17.5104 164.875 15.6562C167.938 13.8021 171.417 12.875 175.312 12.875C179.167 12.875 182.604 13.7917 185.625 15.625C188.646 17.4583 190.99 20.0729 192.656 23.4688C194.344 26.8438 195.198 30.7188 195.219 35.0938V37.1875ZM184.062 35.2812C184.062 30.7604 183.302 27.3333 181.781 25C180.281 22.6458 178.125 21.4688 175.312 21.4688C169.812 21.4688 166.906 25.5938 166.594 33.8438L166.562 37.1875C166.562 41.6458 167.302 45.0729 168.781 47.4688C170.26 49.8646 172.458 51.0625 175.375 51.0625C178.146 51.0625 180.281 49.8854 181.781 47.5312C183.281 45.1771 184.042 41.7917 184.062 37.375V35.2812Z"
            fill="#FFFEFE"
          />
        </svg>

        <ul className="flex space-x-10 text-gray-400">
          <li className="hover:text-gray-100 transition-colors duration-200">
            <Link href="/">Find a Home </Link>
          </li>
          <li className="hover:text-gray-100 transition-colors duration-200">
            <Link href="/">Homeowners </Link>
          </li>
          <li className="hover:text-gray-100 transition-colors duration-200">
            <Link href="/">Community </Link>
          </li>
          <li className="hover:text-gray-100 transition-colors duration-200">
            <Link href="/">About </Link>
          </li>
        </ul>
        <div className="group cursor-pointer text-gray-100 flex space-x-2">
          <svg
            width="24"
            height="24"
            fill="none"
            className=" group-hover:text-gray-300 transition-colors duration-200"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <div className="group-hover:text-gray-300 transition-colors duration-200">
            Search
          </div>
        </div>
      </nav>

      <section className="relative">
        <img src="/img/nyumba.png" className="absolute inset-0" alt="House" />
      </section>
    </div>
  );
};

export default Header;
