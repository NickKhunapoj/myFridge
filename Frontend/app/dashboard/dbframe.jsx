import React from 'react';

export const DashboardFrame = () => {
    return (
        <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
            {/* Dashboard Header */}
            <div className="flex">
                <div className="sticky w-3/5 pt-12 pl-16 font-medium text-4xl text-white">
                    Dashboard
                </div>
                
                {/* Search box with PNG icons (moved to the left) */}
                <div className="sticky w-2/5 right-0 pt-12 pr-16 flex items-center">
                    <input
                        type="text"
                        placeholder="Search Dashboard..."
                        className="w-full h-full py-1 pl-12 pr-7 rounded-2xl bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                        style={{ color: "white" }} // Set text color to white
                    />
                    <img
                        src="https://cdn.discordapp.com/attachments/1151835814939078738/1151837859939102720/1f5f8f3eb04b33df710ea2026ec3e432.png" // Replace with the actual path to your PNG icon
                        alt="Search"
                        className="absolute w-6 h-6 left-4 "
                    />
                </div>
            </div>

            {/* Status Box */}
            <div className="flex">
                {/* Total Items */}
                <div className="sticky w-80 2xl:w-1/4 pt-14 pl-16">
                    <div className="sticky w-full h-56 bg-[#142741] rounded-[35px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-6 left-8 font-medium text-[#a2d7a7] text-[21px]">
                            Total Items
                        </div>
                        <div className="flex w-full h-56 pt-10 justify-center text-medium text-[#a2d7a7] text-[40px] items-center">
                            7
                        </div>
                    </div>
                </div>
                {/* Expired Soon */}
                <div className="sticky w-80 2xl:w-1/4 pt-14 pl-10 2xl:pl-16">
                    <div className="sticky h-56 bg-[#142741] rounded-[35px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-6 left-8 font-medium text-[#ff7f78] text-[21px]">
                            Expired Soon
                        </div>
                        <div className="flex w-full h-56 pt-10 justify-center text-medium text-[#ff7f78] text-[40px] items-center">
                            0
                        </div>
                    </div>
                </div>
            </div>
            {/* Recently Added */}
            <div className="sticky pt-16 pl-16 font-medium text-[#ffffff] text-3xl">
                Recently Added
            </div>

            {/* Table */}
            <div className="sticky w-full pt-8 px-16">
                <div className="sticky h-96 bg-[#142741] rounded-[35px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                    <table className="w-full h-full table-fixed">
                        <thead>
                            <tr className="text-[#ffd8ac] text-[21px]">
                                <th className="pt-4 px-6">Item Name</th>
                                <th className="pt-4 px-6">Expiry Date</th>
                                <th className="pt-4 px-6">Quantity</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr className="text-[#ffffff] text-[18px]">
                                <td className="pt-3 pb-1 px-6">Milk</td>
                                <td className="pt-3 pb-1 px-6">31 Dec 2023</td>
                                <td className="pt-3 pb-1 px-6">5</td>
                            </tr>
                            <tr className="text-[#ffffff] text-[18px]">
                                <td className="py-1 px-6">Eggs</td>
                                <td className="py-1 px-6">30 Dec 2023</td>
                                <td className="py-1 px-6">4</td>
                            </tr>
                            <tr className="text-[#ffffff] text-[18px]">
                                <td className="py-1 px-6">Ketchup</td>
                                <td className="py-1 px-6">29 Nov 2023</td>
                                <td className="py-1 px-6">5</td>
                            </tr>
                            <tr className="text-[#ffffff] text-[18px]">
                                <td className="py-1 px-6">Chocolate</td>
                                <td className="py-1 px-6">20 Nov 2023</td>
                                <td className="py-1 px-6">3</td>
                            </tr>
                            <tr className="text-[#ffffff] text-[18px]">
                                <td className="py-1 px-6">Butter</td>
                                <td className="py-1 px-6">31 Oct 2023</td>
                                <td className="py-1 px-6">3</td>
                            </tr>
                            <tr className="text-[#ffffff] text-[18px]">
                                <td className="py-1 px-6">Apple Juice</td>
                                <td className="py-1 px-6">20 Oct 2023</td>
                                <td className="py-1 px-6">4</td>
                            </tr>
                            <tr className="text-[#ffffff] text-[18px]">
                                <td className="pb-3 px-6">Mayonaise</td>
                                <td className="pb-3 px-6">15 Oct 2023</td>
                                <td className="pb-3 px-6">1</td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashboardFrame;
