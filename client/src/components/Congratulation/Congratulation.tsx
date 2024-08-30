import React from "react";
import { cclose, congratPaper } from "../../assets";
type proptype = {
  setCongrats: React.Dispatch<React.SetStateAction<boolean>>;
};
function Congratulation(prop: proptype) {
  const { setCongrats } = prop;
  return (
    <>
      <div className="fixed flex justify-center items-center w-full min-h-screen top-0  left-0 bg-[rgba(24,35,37,0.4)] z-[2000] p-[40px_15px]" onClick={() => { setCongrats(false); }}>
        <img src={congratPaper} alt="Congrats Paper" className="w-[654px]  max-w-full absolute z-[2001]" onClick={(e) => e.stopPropagation()} />
        <div className="w-[570px] h-[342px] p-10 bg-white rounded-3xl flex-col justify-start items-start gap-[25px] inline-flex relative z-[2001]" onClick={(e) => e.stopPropagation()}>
          <img src={cclose} alt="CClose" className="absolute right-3 top-3 w-10 " onClick={() => setCongrats(false)} />
          <div className="text-[#182224] max-w-[390px] lg:text-[32px] text-[20px] font-medium font-['Inter'] lg:leading-[38.72px]">
            Thank you for your time!    <br /> It is very important for us.  </div>
          <div className="cgrad h-[239px] rounded-xl flex-col justify-center items-center gap-3 flex"></div>
        </div>
      </div>
    </>
  );
}
export default Congratulation;
