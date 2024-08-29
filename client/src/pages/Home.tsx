import {
  award,
  book,
  ci1,
  ci2,
  ci3,
  ci4,
  circlelottie,
  cloud,
  code,
  coin,
  her1,
  her2,
  her3,
  her4,
  light,
  mail,
  shield,
  shield2,
} from "../assets";
import Lottie from "lottie-react";
import { Signup } from "../components";
import { useEffect } from "react";

// 2xl:bg-[url(./src/assets/her1.svg)] lg:bg-[url(./src/assets/her2.svg)] xs:bg-[url(./src/assets/her3.svg)] bg-[url(./src/assets/her4.svg)]
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="relative overflow-visible max-w-[100%] lg:h-[676px] h-[552px] ">
        <img
          src={her1}
          alt=""
          className="absolute hidden 2xl:block w-full z-[-1] bg-hero"
        />
        <img
          src={her2}
          alt=""
          className="absolute hidden lg:block 2xl:hidden w-full z-[-1] bg-hero"
        />
        <img
          src={her3}
          alt=""
          className="absolute hidden xs:block lg:hidden w-full z-[-1] bg-hero"
        />
        <img
          src={her4}
          alt=""
          className="absolute block xs:hidden w-full z-[-1] bg-hero"
        />
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
                <button className="w-32 h-12 px-4 py-[18px] text-center text-base font-bold font-inter leading-normal btn btn1 rounded-lg justify-center items-center gap-2.5 flex">
                  Get Started
                </button>
                <button className="w-[159px] h-12 px-4 py-[18px] rounded-lg border btn btn2 justify-center items-center gap-2.5 flex text-center text-base font-bold font-inter leading-normal">
                  Join the Waitlist
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
            <div className="flex flex-col">
              <div className="flex sm:flex-row flex-col gap-x-5 gap-y-[17.5px]  border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex sm:w-[50%] justify-center items-center sm:py-[77px] lg:py-[23px] py-6">
                  <div className="sm:w-[284px] sm:h-[284px] xl:w-[394px] xl:h-[390px] w-[288px] h-[260px]">
                    <Lottie animationData={ci1} loop={true} />
                  </div>
                </div>
                <div className="sm:h-[inherit] sm:w-[1px] sm:block hidden bg-[rgba(7,7,7,0.20)]"></div>
                <div className="flex sm:w-[50%] items-center sm:border-t-0 pb-8">
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
              <div className="flex sm:flex-row flex-col-reverse gap-x-5 gap-y-[17.5px]  border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex sm:w-[50%] items-center pb-8">
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
                <div className="sm:h-[inherit] sm:w-[1px] sm:block hidden bg-[rgba(7,7,7,0.20)]"></div>

                <div className="flex sm:w-[50%] justify-center items-center sm:py-[77px] lg:py-[23px] py-6">
                  <div className="sm:w-[265px] xl:w-[401px] xl:h-[427px]  sm:h-[282px] w-[288px] h-[260px]">
                    <Lottie animationData={ci2} loop={true} />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-row flex-col gap-x-5 gap-y-[17.5px]  border-t-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex sm:w-[50%] justify-center items-center  py-[80px]">
                  <div className="sm:w-[282px] xl:w-[518px] xl:h-[436px] sm:h-[236px] w-[288px] h-[260px]">
                    <Lottie animationData={ci3} loop={true} />
                  </div>
                </div>
                <div className="sm:h-[inherit] sm:w-[1px] sm:block hidden bg-[rgba(7,7,7,0.20)]"></div>

                <div className="flex sm:w-[50%] items-center pb-8">
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
              <div className="flex sm:flex-row flex-col-reverse gap-x-5 gap-y-[17.5px]  border-t-[1px] border-b-[1px] border-[rgba(7,7,7,0.20)]">
                <div className="flex sm:w-[50%] items-center pb-8">
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
                <div className="sm:h-[inherit] sm:w-[1px] sm:block hidden bg-[rgba(7,7,7,0.20)]"></div>

                <div className="flex sm:w-[50%] justify-center items-center py-10">
                  <div className="sm:w-[272px] xl:w-[342px] xl:h-[355px] sm:h-[282px] w-[288px] h-[260px]">
                    <img src={ci4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Your Security is your priority Start*/}
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Your Security is Our Priority
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={code} alt="Code Box" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                    Encryption
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Unlock advanced trading opportunities with our Arbitrage &
                    Quant Strategies. Explore proven techniques, gain insights
                    from real case studies, and watch video demos to enhance
                    your trading approach
                  </p>
                </div>
              </div>
              <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                <div className="">
                  <img src={shield} alt="Shield" />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                    Protection against hacks
                  </div>
                  <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter">
                    Unlock advanced trading opportunities with our Arbitrage &
                    Quant Strategies. Explore proven techniques, gain insights
                    from real case studies, and watch video demos to enhance
                    your trading approach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your Security is your priority End */}
      {/* Stay Informed Start */}
      <form
        method="POST"
        className="lg:p-[0px_80px] xs:p-[0px_40px] p-[0px_16px] w-full flex justify-center"
      >
        <div className="w-[1280px] max-w-[100%] rounded-[12px] stay-sec sm:p-[60px_24px] p-[24px_12px] flex lg:flex-row flex-col gap-3">
          <div className="lg:w-[50%] w-[100%]">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Stay Informed
            </div>
            <p className="sm:text-[16px] text-[14px] leading-6 tracking-[-0.08px] font-[400] text-[rgba(7,7,7,0.56)] font-inter pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="lg:w-[50%] w-[100%] bg-white xs:p-5 p-4 gap-3 rounded-[8px] border-[1px] border-[rgba(255,255,255,0.20)] flex flex-col xs:gap-5">
            <div className="h-[34px] pl-3 pr-[7px] py-[5px] rounded border border-[#070707]/60 justify-start items-center inline-flex">
              <input
                type="email"
                placeholder="Email"
                className="border-none outline-none w-[100%] text-[#070707]/70 text-sm font-normal font-ibm leading-tight"
              />
              <div className="w-5 h-5">
                <img src={mail} alt="Mail" />
              </div>
            </div>
            <button className="h-[34px] btn btn1 p- text-center text-sm font-medium font-ibm leading-none rounded flex-col justify-center items-center inline-flex">
              Get Started
            </button>
          </div>
        </div>
      </form>
      {/* Stay Informed End */}
      {/* Accessibility Start*/}
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]">
          <div className="w-[100%] flex flex-col items-start gap-6">
            <div className="text-[#070707] sm:text-[42px] text-[28px] font-['HelveticaNeueCyr'] leading-[42px] font-[550]">
              Accessibility
            </div>
            <div className="flex sm:flex-row flex-col-reverse gap-3">
              <div className="grid sm:w-[50%] grid-rows-3 grid-cols-1 gap-3 ">
                <div className="sm:p-6 p-4 flex items-start gap-4 flex-col rounded-[12px] bg-[#F6F6FD]">
                  <div className="">
                    <img src={cloud} alt="Cloud" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Institutional Grade Security
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
                    <img src={coin} alt="Coin" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Investor Centric Approach
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
                    <img src={shield2} alt="Shield 2" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="font-HelveticaNeueCyr sm:text-[28px] text-[20px] leading-[110%] tracking-[-1px] font-[550]  text-dark100">
                      Easily Accessible
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
              <div className="sm:w-[50%] sm:h-[inherit] flex justify-center items-center bg-[#F6F6FD]">
                <Lottie
                  animationData={circlelottie}
                  className="w-[316px] h-[280px] "
                  alt="Circle Lottie"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Accessibility End */}

      <Signup />

      {/* 
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]"></div>
      </div>
      <div className="lg:p-[75px_80px] xs:p-[25px_40px] p-[25px_16px] w-full flex justify-center">
        <div className="max-w-[1280px]"></div>
      </div> 
      */}
    </>
  );
}

export default Home;
