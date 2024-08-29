// import React from 'react'

import { Link } from "react-router-dom";
import { ham, logo } from "../../assets";

function Navbar() {
  return (
    <div className="navbar max-w-[100%] flex justify-center lg:p-[12px_80px] sticky top-0 bg-white z-[1000]">
      <div className="flex items-center justify-between w-[1280px] max-w-[100%] lg:h-12 xs:h-[75px] lg:px-0 px-4 xs:px-10 h-[60px]">
        <div className="logo flex justify-center items-center">
          <img src={logo} alt="Nika Logo" />
          <div className="h-[34px] pl-2 pr-[7px] py-1 justify-center items-center gap-1 inline-flex">
            <div className="text-center text-[#070707] text-[22px] font-bold font-['Inter'] capitalize leading-tight">
              Nika
            </div>
          </div>
        </div>
        <div className="lg:flex links hidden items-center gap-3 text-center text-[#070707] text-[16px] font-inter font-[500] leading-6">
          {/* <Link to="/">Home</Link> */}
          <Link to="/about" className="p-[4px_7px_4px_12px]">
            About us
          </Link>
          <Link to="/blog" className="p-[4px_7px_4px_12px]">
            Blog
          </Link>
          <Link to="/waitlist" className="p-[4px_7px_4px_12px]">
            Waitlist
          </Link>
          <Link to="/webapp" className="p-[4px_7px_4px_12px]">
            Web3
          </Link>
          {/* <Link to="/article">article</Link> */}
          {/* <Link to={`/${Math.random()}`}>error_page</Link> */}
        </div>
        <button className="w-32 btn btn3 h-12 text-center text-base font-semibold font-inter leading-tight px-4 py-[18px] rounded-lg justify-center items-center gap-2.5 lg:inline-flex hidden">
          Get Started
        </button>
        <div className="hamburger lg:hidden">
          <img src={ham} alt="Hamburger" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
