import React from "react";

export const Topmenu = () => {
  return (
    <div className="topmenu-container">
      <div className="relative w-full h-[67px]">
        <div className="fixed w-full h-[67px] top-0 left-0 bg-[#21253180]">
          <div className="absolute top-0 left-0 flex items-center text-center w-full ml-5 h-[67px]">
            <div className="flex items-center">
            {/* logo */}
              <a
                    href="#"
                    className="relative w-16 h-16 pl-10 mr-5 cursor-pointer"
                >
                    <img
                        src="./image__1_-removebg-preview_1.png" // Replace with the path to your image
                        alt="myFridge Logo"
                        className="w-full h-full object-contain transition-transform transform scale-175"
                    />
              </a>
              <span className="[font-family:'Manrope',Helvetica] text font-semibold text-white text-[25px] tracking-[0]">
                myFridge
                <br />
              </span>
            </div>
            <div className="text-[#d5b7e8] text-[21px] flex items-center ml-auto mr-9 pr-10 font-normal">
              <a href="/register" className="text-[#d5b7e8] hover:underline">
                Don’t have myFridge account?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
