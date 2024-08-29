// import React from 'react'
import blog from "../../utils/blog";
type proptype = {
  data: blog;
};
function BlogCard(prop: proptype) {
  return (
    <>
      <div className="flex h-full p-3 gap-5 flex-col items-start w-[100%] rounded-[12px] bg-[rgba(7,7,7,0.03)]">
        <div className="w-full">
          <img src={prop.data.img} className="w-full h-[200px]" alt="" />
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <div className="flex flex-col items-start gap-2 ">
            <h3 className="text-[20px] font-HelveticaNeueCyr font-[550] leading-[120%] tracking-[-0.5px] text-[#070707]">
              {prop.data.title}
            </h3>
            <p className="font-inter leading-6 tracking-[-0.08px] text-[rgba(7,7,7,0.56)] text-ellipsis overflow-hidden line-clamp-1">
              {prop.data.post}
            </p>
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="px-2 py-1 bg-[#5a40fe] rounded-[34px] justify-center items-center gap-2.5 flex">
              <div className="text-white text-xs font-medium font-inter leading-[18px]">
                {prop.data.tag}
              </div>
            </div>
            <div className="text-right text-[#070707] text-sm font-normal font-inter leading-tight">
              {prop.data.date}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
