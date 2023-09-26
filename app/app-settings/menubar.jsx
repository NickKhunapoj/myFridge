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
            <div className="container p-4 top-0 w-1/2 z-10 ml-5 flex justify-between items-center">
                <a
                    href="#"
                    className="hover:underline font-Manrope font-semibold text-white text-3xl cursor-pointer"
                    onClick={backHome} // Add onClick handler for redirection
                >
                    myFridge
                </a>
            </div>
            <button
                className="2xl:hidden container p-4 justify-end top-0 w-1/2 z-10 mr-5 flex items-center"
            >
                <img
                    src="https://cdn.discordapp.com/attachments/1151835814939078738/1155449006386839643/icons8-menu-96_1.png"
                    alt="sidebar" // Add an appropriate alt text for accessibility
                    style={{ width: '30px', height: '30px' }} // Adjust the width and height as needed
                    className="hover:bg-gray-500 transition-all duration-300 ease-in-out"
                />
            </button>
        </nav>
    );
};

export default MenuBar;
