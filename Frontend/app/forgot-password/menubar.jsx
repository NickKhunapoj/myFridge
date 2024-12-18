import React from "react";

export const MenuBar = () => {
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
                        src="./image__1_-removebg-preview_1.png?ex=6516ce26&is=65157ca6&hm=0414d5fa6ea89ee386e33906c3d3018918b4da22d5157dc8607d0dc9b447b51a&" // Replace with the path to your image
                        alt="myFridge Logo"
                        className="w-full h-full object-contain transition-transform transform scale-125"
                    />
              </a>
              <span className="[font-family:'Manrope',Helvetica] text font-semibold text-white text-[25px] tracking-[0]">
                myFridge
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;