import React from "react";

export const Topmenubar = () => {
  return (
    <div className="topmenu-container">
      <div className="relative w-full h-[67px]">
        <div className="fixed w-full h-[67px] top-0 left-0 bg-[#21253180]">
          <div className="absolute top-0 left-0 flex items-center pl-[35px] w-full h-[67px]">
            <div className="text-white font-Manrope font-semibold text-3xl tracking-[0] leading-[normal]">
              myFridge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};