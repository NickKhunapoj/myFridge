'use client'
import React from "react";
import { Topmenubar } from "app/topmenubar";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  const handleLogin = () => {
    // Redirect to the login page
    router.push('/');
  };

  return (
    <div className="bg-[url(../public/bg.png)] bg-cover bg-center flex relative w-full h-full justify-center items-center">
      <Topmenubar/>
      <div className="flex items-center justify-center flex-grow container mx-auto h-screen">
        <div className="bg-[#21253180] rounded-[45px] shadow-lg backdrop-blur-[50px] backdrop-brightness-[100%] -webkit-backdrop-filter:blur(50px)_brightness(100%) px-8">
          <h1 className="text-white text-4xl text-center mt-8">Create Account</h1>
          <form className="p-4">
            <div className="mb-4">
              <label className="text-white text-lg ml-4">Email</label>
              <input
                type="email"
                className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-1.5"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="text-white text-lg ml-4">Display name</label>
              <input
                type="text"
                className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-1.5"
                placeholder="Enter your display name"
              />
            </div>
            <div className="mb-4">
              <label className="text-white text-lg ml-4">Username</label>
              <input
                type="text"
                className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-1.5"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="text-white text-lg ml-4">Password</label>
              <input
                type="password"
                className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-1.5"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label className="text-white text-lg ml-4">Confirm Password</label>
              <input
                type="password"
                className="text-white w-full bg-[#40404099] rounded-md px-4 py-1.5"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-2">
              <label className="text-white text-lg ml-4">Date of Birth</label>
            </div>
            <div className="mb-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="text-white text-lg ml-4">Month</label>
                  <select className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-2.5">
                    <option value="january">January</option>
                    <option value="febuary">Febuary</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="text-white text-lg ml-4">Date</label>
                  <select className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-2.5">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>                    
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="text-white text-lg ml-4">Year</label>
                  <select className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-2.5">
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>
            </div>
            <button
                className="w-full bg-[#1d2387] font-family:'Manrope-Regular',Helvetica font-normal text-white text-[30px] text-center tracking-[0] rounded-md py-2 text-white text-xl font-semibold hover:bg-blue-900 transition duration-300 mt-2"
                type="button"
                onClick={handleLogin}
              >
                Continue
              </button>
          </form>
          <p className="text-[#979fa9] text-[18px] text-left mb-3 ml-5">
            By registering, you agree to myFridge’s Terms of service and privacy
          </p>
          <button className="text-[#4950f9] text-[18px] left ml-5 mt-6 mb-8 hover:underline" onClick={handleLogin}>
                Already have myFridge account?
          </button>
        </div>
      </div>
    </div>
  );
}
