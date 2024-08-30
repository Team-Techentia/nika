// import React from 'react'

import Lottie from "lottie-react";
import { book, ci1, cloud, light } from "../assets";
import { Signup } from "../components";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="about-hero 2xl:h-[600px] lg:p-[160px_80px] xs:p-[160px_40px] p-[160px_16px] w-full flex justify-center items-center">
        <div className="w-[1280px] max-w-full">
          <div className="2xl:w-[690px] w-[650px] max-w-full flex flex-col gap-3 ">
            <h1 className="lg:text-[64px] text-[42px] tracking-[-1.28px] text-start leading-[100%] text-[#070707] font-HelveticaNeueCyr font-[550] lg:max-w-[690px] max-w-[500px]">
              About Us
            </h1>
            <p className="font-inter font-[500] leading-6 text-[rgba(7,7,7,0.72)]">
              Lorem ipsum dolor sit amet consectetur. Commodo tellus at risus
              venenatis mauris feugiat vitae mi. Cursus tempor sit arcu pulvinar
              sagittis nibh blandit iaculis. Feugiat nisl diam facilisis neque
              tempus. Pellentesque accumsan sapien proin phasellus elementum
              molestie dui.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px_0] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]">
          <div className="w-[100%]">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={book} alt="Book" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                    Our Mission
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Example: "At Alongside, we believe in simplifying blockchain
                    diversification, making it accessible to everyone. Our
                    mission is to empower investors by providing secure and
                    innovative financial solutions.
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={light} alt="Light" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                    Our Vision
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Example: "At Alongside, we believe in simplifying blockchain
                    diversification, making it accessible to everyone. Our
                    mission is to empower investors by providing secure and
                    innovative financial solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Expertise Start*/}
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-full">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Team Expertise
            </div>
            <div className="flex sm:flex-row flex-col gap-3">
              <div className="sm:w-[50%] sm:h-[inherit] flex justify-center items-center">
                <Lottie
                  animationData={ci1}
                  className="xs:w-[316px] h-[280px] max-w-[100%]"
                  alt="Circle Lottie"
                />
              </div>
              <div className="grid sm:w-[50%] grid-rows-3 grid-cols-1 gap-3 ">
                <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                  <div className="">
                    <img src={cloud} alt="Cloud" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Lorem ipsum dolor sit amet
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                </div>
                <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                  <div className="">
                    <img src={cloud} alt="Cloud" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Lorem ipsum dolor sit amet
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                </div>
                <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                  <div className="">
                    <img src={cloud} alt="Cloud" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Lorem ipsum dolor sit amet
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Expertise End */}
      <Signup />
    </>
  );
}

export default About;
