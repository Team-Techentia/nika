// import React from 'react'

import { useEffect } from "react";
import { jo1, jo2, jo3, jo4, jo5, jo6, jo7, mail } from "../assets";
import { HomeCard, Signup } from "../components";
import card from "../utils/card";

function Waitlist() {
  const waitlistCard: card[] = [
    {
      img: jo1,
      title: "Early Access to Products",
      detail:
        "Users want to be among the first to try out new products, features, or services before they are publicly released.",
    },
    {
      img: jo2,
      title: "Exclusive Offers and Bonuses",
      detail:
        "Special offers or bonuses available only to waitlist members can be a strong incentive to sign up.",
    },
    {
      img: jo3,
      title: "Personalized Recommendations",
      detail: "Waitlist members might expect personalized recommendations",
    },
    {
      img: jo4,
      title: "Exclusive Insights",
      detail:
        "Offering exclusive content like insights, educational resources, or expert tips can attract users to join the waitlist.",
    },
    {
      img: jo5,
      title: "Discounts on Future Purchases",
      detail: "The potential to receive discounts to join the waitlist.",
    },
    {
      img: jo6,
      title: "Participation in Beta Testing",
      detail:
        "The opportunity to participate in beta testing and provide feedback on new products",
    },
    {
      img: jo7,
      title: "Support for an Innovative Project",
      detail:
        "The opportunity to participate in beta testing and provide feedback on new products or services ...",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="lg:p-[160px_80px_200px_80px] waitlist-hero xs:p-[160px_40px_120px_40px] p-[160px_25px_120px_25px] flex justify-center items-center">
        <div className="w-[1280px] max-w-full flex xs:gap-8 gap-6 lg:flex-row lg:items-center flex-col">
          <div className="lg:w-[50%] w-full">
            <h1 className="lg:text-[64px] text-[42px] tracking-[-1.28px] text-start leading-[100%] text-[#070707] font-HelveticaNeueCyr font-[550] lg:max-w-[690px] max-w-[500px]">
              Be the First in Line:
            </h1>
            <p className="font-inter font-[500] leading-6 text-[rgba(7,7,7,0.72)]">
              Join Our Waitlist Today
            </p>
          </div>
          <form className="bg-white lg:w-[50%] w-full p-5 flex flex-col gap-5 rounded-[8px] border-[1px] border-[rgba(255,255,255,0.20)]">
            <div className="flex-col w-full justify-start items-start gap-3 inline-flex">
              <div className="h-[41px] w-full flex-col justify-start items-start gap-2 flex">
                <div className="h-[41px] w-full pl-3 pr-2.5 py-[8.50px] bg-[#9f9f9f]/0 rounded border border-black/50 justify-start items-center inline-flex">
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-black/60 border-none outline-none text-base font-normal font-ibm leading-snug w-full"
                  />
                </div>
              </div>
              <div className=" h-[41px] w-full flex-col justify-start items-start gap-2 flex">
                <div className=" h-[41px] w-full pl-3 pr-2.5 py-[8.50px] bg-[#9f9f9f]/0 rounded border border-black/50 justify-start items-center inline-flex">
                  <input
                    type="email"
                    className="text-black/60 border-none outline-none text-base font-normal font-ibm leading-snug w-full"
                    placeholder="Email"
                  />
                  <div className="w-5 h-5 relative">
                    <img src={mail} alt="Mail" />
                  </div>
                </div>
              </div>
            </div>
            <button className="h-[41px] btn btn1 px-4 py-[15px] text-center text-base font-medium font-ibm leading-[17.60px] rounded flex-col justify-center items-center inline-flex">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-full">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Why Join?
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
              {waitlistCard.map((data, idx) => (
                <HomeCard key={idx} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Signup />
    </>
  );
}

export default Waitlist;
