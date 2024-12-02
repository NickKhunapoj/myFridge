import React from "react";

export const Topmenubar = () => {
  return (
    <div className="topmenu-container">
      <div className="relative w-full h-[67px]">
        <div className="fixed w-full h-[67px] top-0 left-0 bg-[#21253180]">
          <div className="absolute top-0 left-0 flex items-center w-full h-[67px]">
            {/* logo */}
            <a
                    href="#"

                    className="relative w-16 h-16 pl-10 cursor-pointer"
                >
                    <img
                        src="./image__1_-removebg-preview_1.png" // Replace with the path to your image
                        alt="myFridge Logo"
                        className="w-full h-full object-contain transition-transform transform scale-125"
                    />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};