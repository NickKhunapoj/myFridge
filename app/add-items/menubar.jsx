"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const MenuBar = () => {
    const router = useRouter();

    const backHome = () => {
        // Redirect to the home page
        router.push('/dashboard');
    };

    return (
        <nav className="sticky flex bg-[#21253180]">
            <div className="flex container p-4 top-0 w-1/4 z-10 ml-5 justify-between items-center">
                <a
                    href="#"
                    className="hover:underline font-Manrope font-semibold text-white text-3xl cursor-pointer"
                    onClick={backHome}
                >
                    myFridge
                </a>
            </div>
            {/* nav bar */}
            <div className="flex w-3/4 justify-end 2xl:hidden">
                <div className="flex items-center pr-12 font-Manrope font-normal text-white text-[18px]">
                    <div>
                        <a href="#" className="text-white hover:underline hover:text-[20px] px-8 transition-all duration-300 ease-in-out" 
                        onClick={() => router.push('/dashboard')}>Dashboard</a>
                        <a href="#" className="text-red-300 hover:underline hover:text-[20px] px-8 transition-all duration-300 ease-in-out"
                        onClick={() => router.push('/items')}>Items</a>
                        <a href="#" className="text-white hover:underline hover:text-[20px] pl-8 pr-10 transition-all duration-300 ease-in-out"
                        onClick={() => router.push('/app-settings')}>App Settings</a>
                    </div>
                    <a href="#" onClick={() => router.push('/dashboard')}>
                        <img
                            src="https://media.discordapp.net/attachments/1151835814939078738/1151836796276199434/imp-profilepic.png?width=412&height=412"
                            alt="Profile Picture"
                            className="w-12 h-12 hover:w-14 hover:h-14 rounded-full cursor-pointer transition-all duration-300 ease-in-out"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;
