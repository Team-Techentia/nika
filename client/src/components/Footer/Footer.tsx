// import React from 'react'

import { Link } from "react-router-dom";
import { logo } from "../../assets";

function Footer() {
  return (
    <>
      <div className="lg:p-[40px_80px] xs:p-[24px_40px] p-[24px_16px] lg:pb-0 xs:pb-0 pb-0 w-full flex justify-center bg-[#070707]">
        <div className="w-[1280px] max-w-[100%]">
          <div className="lg:pb-5 xs:pb-2.5 pb-6 flex items-center ">
            <img src={logo} alt="Brand Logo" />
            <p className="font-inter lg:text-[22px] text-[16px] text-white font-bold leading-[90%] text-center px-1.5 py-[3px]">
              Nika
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[100%] ">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="">
                <h3 className="lg:text-[36px] font-[550] font-HelveticaNeueCyr tracking-[-1px] lg:leading-[120%] text-white text-[28px] leading-[110%] lg:max-w-[450px] max-w-[330px]">
                  Effortless On-Chain Diversification
                </h3>
                <div className="text-[rgba(255,255,255,.72)] pt-1 text-sm font-normal font-['Inter'] leading-[140%]">
                  Investment opportunities available to everyone
                </div>
              </div>

              <div className="">
                <div className="flex lg:flex-row flex-col gap-1.5">
                  <input
                    className="h-[38px] w-[100%] pl-3 py-3 text-base font-normal font-['Inter'] leading-tight bg-white/20 rounded-md justify-start items-center gap-2.5 inline-flex text-[rgba(255,255,255,.72)]"
                    placeholder="Email address"
                  />
                  <button className="h-9 lg:w-[156px] w-[100%] px-4 py-3 bg-[#5a40fe] rounded-md shadow justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-base font-medium font-['Inter'] leading-tight">
                      {" "}
                      Try it out
                    </div>
                  </button>
                </div>
                <div className="h-[17px] mt-2 justify-start items-center gap-2 inline-flex">
                  <input
                    type="checkbox"
                    className="w-4 h-4 relative bg-white rounded-[3px] shadow"
                  />
                  <div className="text-white text-xs font-light font-['Inter'] leading-none">
                    I agree to receive marketing emails from Nika
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 pb-[30px] grid sm:grid-cols-4">
              <div className="flex flex-col items-start gap-2">
                <div className="text-white text-sm font-medium font-['Inter'] leading-[16.80px]">
                  Page
                </div>
                <Link
                  className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight"
                  to={"/blog"}
                >
                  Blog
                </Link>
                <Link
                  className="text-[rgba(255,255,255,0.56)] text-sm font-normal font-['Inter'] leading-tight"
                  to={"/blog"}
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="h-[41px] py-3 justify-center items-center inline-flex">
              <div className="text-[rgba(255,255,255,0.72)] text-xs font-normal font-['Inter'] leading-none">
                © 2024 Nika
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
