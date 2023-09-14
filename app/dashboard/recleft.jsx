import React from "react";

export const RecLeft = () => {
  return (
    <div className="fixed flex items-center justify-center left-16 top-28"> {/* Adjust left and top values for spacing */}
      <div className="relative w-[479px] h-[886px] bg-[#21253180] rounded-[55px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
        <div className="flex flex-col items-start gap-px absolute w-[246px] h-[71px] top-[61px] left-[181px]">
          <p className="relative self-stretch [font-family:'Manrope-SemiBold',Helvetica] font-normal text-white text-[35px] tracking-[0] leading-[normal]">
            <span className="font-semibold">
              👋 Good Day <br />
            </span>
          </p>
          <p className="relative self-stretch [font-family:'Manrope-SemiBold',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]">
            <span className="[font-family:'Manrope-Medium',Helvetica] font-medium text-[23px]"å>
              KHUNAPOJ SUTTENON
            </span>
          </p>
        </div>
        <img
          className="absolute w-[103px] h-[103px] top-[45px] left-[52px] object-cover"
          alt="Profile pic"
          src="https://media.discordapp.net/attachments/1151835814939078738/1151836796276199434/imp-profilepic.png?width=412&height=412"
        />
        <div className="absolute w-[184px] h-[37px] top-[795px] left-[53px]">
          <div className="absolute w-[138px] top-0 left-[44px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#d5b7e8] text-[25px] tracking-[0] leading-[normal]">
            Sign Out
          </div>
          <img
            className="w-[30px] absolute h-[31px] top-[3px] left-0 object-cover"
            alt="Sign out"
            src="https://media.discordapp.net/attachments/1151835814939078738/1151836795621888080/icon-signout.png?width=120&height=124"
          />
        </div>
        <div className="absolute w-[259px] h-[37px] top-[315px] left-[52px]">
          <div className="absolute w-[212px] top-0 left-[45px] [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[25px] tracking-[0] leading-[normal]">
            App Settings
          </div>
          <img
            className="w-[31px] absolute h-[31px] top-[3px] left-0 object-cover"
            alt="Settings"
            src="https://media.discordapp.net/attachments/1151835814939078738/1151836795366019152/icon-settings.png?width=124&height=124"
          />
        </div>
        <div className="absolute w-[184px] h-[37px] top-[257px] left-[53px]">
          <div className="absolute w-[138px] top-0 left-[44px] [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[25px] tracking-[0] leading-[normal]">
            Items
          </div>
          <img
            className="w-[30px] absolute h-[31px] top-[3px] left-0 object-cover"
            alt="Filing"
            src="https://media.discordapp.net/attachments/1151835814939078738/1151836795110170726/icon-items.png?width=120&height=124"
          />
        </div>
        <div className="absolute w-[185px] h-[37px] top-[199px] left-[52px]">
          <div className="absolute w-[138px] top-0 left-[45px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#e59393] text-[25px] tracking-[0] leading-[normal]">
            Dashboard
          </div>
          <img
            className="w-[31px] absolute h-[31px] top-[3px] left-0 object-cover"
            alt="Dashboard"
            src="https://media.discordapp.net/attachments/1151835814939078738/1151836794879496272/icon-dashboard.png?width=124&height=124"
          />
        </div>
      </div>
    </div>
  );
};

export default RecLeft;
