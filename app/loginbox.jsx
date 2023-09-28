'use client'
import React from "react";
import { useRouter } from 'next/navigation';

export const Box = () => {
  const router = useRouter();

  const handleDashboard = () => {
    // Redirect to the login page
    router.push('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Text Group */}
      <div className="text-group">
        <div className="w-[516px] h-[116px]">
          <div className="flex flex-col items-start gap-[10px] relative w-[516px] h-[116px]">
            <p className="relative self-stretch [font-family:'Manrope-Bold',Helvetica] font-bold text-white text-[60px] text-center tracking-[0] leading-[normal]">
              <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[60px] tracking-[0]">
                myFridge
                <br />
              </span>
            </p>
            <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-medium text-white text-[25px] text-center tracking-[0] leading-[normal]">
              <span className="text-[25px]">Your personal fridge management website.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="mt-10"></div>

      {/* Login Box Group */}
      <div className="login-box-group">
        <div className="inline-flex flex-col items-start gap-[10px] relative">
          <div className="relative w-[675px] h-[375px] bg-[#21253180] rounded-[55px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]" />
          <div className="absolute top-[47px] left-[58px] font-family:'Manrope-Regular',Helvetica font-normal text-white text-[20px] tracking-[0] leading-[normal]">
            Username or Email
          </div>
          <div className="absolute top-[80px] left-[58px] right-[58px]">
            <input
              type="text"
              placeholder="Enter your username or email"
              className="w-full h-[50px] bg-[#40404099] rounded-[15px] text-white text-[20px] pl-[10px] font-family:'Manrope-Regular',Helvetica font-normal"
            />
          </div>
          <div className="absolute top-[149px] left-[58px] font-family:'Manrope-Regular',Helvetica font-normal text-white text-[20px] tracking-[0] leading-[normal]">
            Password
          </div>
          <div className="absolute top-[182px] left-[58px] right-[58px]">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-[50px] bg-[#40404099] rounded-[15px] text-white text-[20px] pl-[10px] font-family:'Manrope-Regular',Helvetica font-normal"
            />
          </div>
          <div className="absolute w-[133px] h-[54px] top-[289px] left-[271px]">
            <div className="relative w-[133px] h-[54px] bg-[#1d2387] rounded-[15px]">
              <button
                type="button"
                className="w-full h-full font-family:'Manrope-Regular',Helvetica font-normal text-white text-[30px] text-center tracking-[0] leading-[normal] hover:bg-[#000000] hover:rounded-[15px] transition-colors duration-300"
                onClick={handleDashboard}
              >
                Log in
              </button>
            </div>
          </div>
          {/* Forgot Password Text */}
          <div className="absolute top-[240px] left-[58px] font-family:'Manrope',Helvetica font-normal text-20px] text-[#4950f9] cursor-pointer">
            <a href="/">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
