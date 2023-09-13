import React from "react";

export const Topmenu = () => {
  return (
    <div className="topmenu-container">
      <div className="relative w-full h-[67px]">
        <div className="fixed w-full h-[67px] top-0 left-0 bg-[#21253180]">
          <div className="absolute top-0 left-0 flex items-center pl-[35px] w-full h-[67px]">
            <div className="text-white font-Manrope font-semibold text-[37px] tracking-[0] leading-[normal]">
              myFridge
            </div>
            <div className="text-[#d5b7e8] text-[20px] flex items-center ml-auto mr-[35px] font-light">
              <a href="/signup" className="text-[#d5b7e8] hover:underline">
                Don’t have myFridge account?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
