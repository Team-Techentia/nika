import { award, book, ci1, ci2, ci3, ci4, her1, her2, her3, her4, light, } from "../assets";
import Lottie from "lottie-react";

// 2xl:bg-[url(./src/assets/her1.svg)] lg:bg-[url(./src/assets/her2.svg)] xs:bg-[url(./src/assets/her3.svg)] bg-[url(./src/assets/her4.svg)]
function Home() {
  return (
    <>
      <div className="relative overflow-visible max-w-[100%] lg:h-[676px] h-[552px] pt-10">
        <img src={her1} alt="" className="absolute hidden 2xl:block w-full z-[-1] bg-hero" />
        <img src={her2} alt="" className="absolute hidden lg:block 2xl:hidden w-full z-[-1] bg-hero" />
        <img src={her3} alt="" className="absolute hidden xs:block lg:hidden w-full z-[-1] bg-hero" />
        <img src={her4} alt="" className="absolute block xs:hidden w-full z-[-1] bg-hero" />
        <div className="lg:p-[160px_0_280px_0] xs:p-[120px_40px_200px_40px] p-[120px_6px_174px_6px] z-[10] relative flex justify-center items-center">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col gap-3 items-center">
              <h1 className="lg:text-[64px] text-[42px] tracking-[-1.28px] text-center leading-[100%] text-[#070707] font-HelveticaNeueCyr font-[550] lg:max-w-[690px] max-w-[500px]">
                On-Chain Diversification Made Simple
              </h1>
              <p className="font-inter text-[16px] font-[500] leading-6 text-center text-[rgba(7,7,7,0.72)]">
                Investment opportunities available to everyone
              </p>
            </div>
            <div className="">
              <div className="min-h-12 justify-center items-center flex-wrap gap-[18px] inline-flex">
                <button className="w-32 h-12 px-4 py-[18px] bg-[#5a40fe] rounded-lg justify-center items-center gap-2.5 flex">
                  <div className="text-center text-white text-base font-bold font-['Inter'] leading-normal">
                    Get Started
                  </div>
                </button>
                <button className="w-[159px] h-12 px-4 py-[18px] bg-white rounded-lg border border-[#5a40fe] justify-center items-center gap-2.5 flex">
                  <div className="text-center text-[#5a40fe] text-base font-bold font-['Inter'] leading-normal">
                    Join the Waitlist
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Vision and Mission
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 ">
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={book} alt="Book" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                    Vision Statement
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={light} alt="Light" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                    Mission Statement
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={award} alt="Award" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                    Impact and Goals
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="w-[1280px] max-w-[100%]">
          <div className="flex justify-start flex-col gap-10 w-[100%]">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Explore Key Offerings
            </div>
            <div className="flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8 border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex justify-center items-center sm:py-[77px] lg:py-[23px] py-6">
                  <div className="sm:w-[284px] sm:h-[284px] w-[288px] h-[260px]">
                    <Lottie animationData={ci1} loop={true} />
                  </div>
                </div>
                <div className="flex items-center ">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Crypto Asset Indices
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.72)] font-inter">
                      Get early access to our Crypto Asset Indices. Sign up now
                      to explore comprehensive market insights, asset
                      comparisons, and expert-driven analysis tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8 border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex items-center sm:col-start-1 sm:row-start-1 col-start-1 row-start-2">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Real-World Asset (RWA) Products
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.72)] font-inter">
                      Unlock advanced trading opportunities with our Arbitrage &
                      Quant Strategies. Explore proven techniques, gain insights
                      from real case studies, and watch video demos to enhance
                      your trading approach
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center sm:py-[77px] lg:py-[23px] py-6">
                  <div className="sm:w-[265px]  sm:h-[282px] w-[288px] h-[260px]">
                    <Lottie animationData={ci2} loop={true} />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8 border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex justify-center items-center sm:py-[77px] lg:py-[23px] py-6">
                  <div className="sm:w-[282px]  sm:h-[236px] w-[288px] h-[260px]">
                    <Lottie animationData={ci3} loop={true} />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Yield and Trading Products
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.72)] font-inter">
                      Unlock advanced trading opportunities with our Arbitrage &
                      Quant Strategies. Explore proven techniques, gain insights
                      from real case studies, and watch video demos to enhance
                      your trading approach
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8 border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex items-center sm:col-start-1 sm:row-start-1 col-start-1 row-start-2">
                  <div className="flex flex-col justify-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Arbitrage & Quant Strategies
                    </div>
                    <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.72)] font-inter">
                      Be among the first to master advanced trading with our
                      Arbitrage & Quant Strategies. Secure your spot now to
                      access exclusive techniques, in-depth case studies, and
                      expert-led video tutorials
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="sm:w-[272px]  sm:h-[282px] w-[288px] h-[260px]">
                    <Lottie animationData={ci4} loop={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]"></div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]"></div>
      </div>
    </>
  );
}

export default Home;
