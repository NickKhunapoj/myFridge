'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export const ItemsFrame = () => {

    const router = useRouter();

    const handleAdd = () => {
        router.push('/add-items');
    };

    const handleEdit = () => {
        router.push('/edit-items');
    };

    return (
        <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
            {/* Dashboard Header */}
            <div className="flex">
                <div className="sticky w-3/5 pt-12 pl-16 font-medium text-4xl text-white">
                    Items
                </div>
                
                {/* Search box with PNG icons (moved to the left) */}
                <div className="sticky w-2/5 right-0 pt-12 pr-16 flex items-center">
                    <input
                        type="text"
                        placeholder="Search Items..."
                        className="w-full h-full py-1 pl-12 pr-7 rounded-xl bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                        style={{ color: "white" }} // Set text color to white
                    />
                    <img
                        src="https://cdn.discordapp.com/attachments/1151835814939078738/1151837859939102720/1f5f8f3eb04b33df710ea2026ec3e432.png" // Replace with the actual path to your PNG icon
                        alt="Search"
                        className="absolute w-6 h-6 left-4 "
                    />
                </div>
            </div>
            
            <div className="flex">
            {/* Sort by drop down */}
            <div className="w-1/4 pt-16 px-16 text-white text-[20px]">
                <label htmlFor="sortBy" className="block text-white text-[20px]">Sort by:</label>
                <select
                id="sortBy"
                className="w-full py-3 pl-3 pr-10 mt-1 bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] hover:rounded-[15px] dark:text-gray-100 hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                >
                <option value="name">Name</option>
                <option value="date">Quantity</option>
                <option value="price">Expiry Date</option>
                <option value="price">Recently Added</option>
                </select>
            </div>
            {/* Add item button */}
            <div className="w-3/4 pt-16 px-16 mt-6 flex justify-end">
                <button
                    className="w-48 h-14 bg-[#0c420c] hover:bg-[#1a3f50] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center focus:outline-none"
                    onClick={() => handleAdd()} // Add the onClick attribute here
                    >
                    <div className="font-medium text-[#ffffff] text-[21px]">
                    Add Item
                    </div>
                </button>
            </div>
        </div>
            {/* Item Lists row 1 */}
            <div className="flex">
                {/* Item 1 */}
                <div className="sticky w-96 xl:w-1/3 pt-14 pl-16">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
                {/* Item 2 */}
                <div className="sticky w-96 xl:w-1/3 pt-14 px-10">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
                {/* Item 3 */}
                <div className="sticky w-96 xl:w-1/3 pt-14 pr-16">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
            </div>
            {/* Item Lists row 2 */}
            <div className="flex">
                {/* Item 1 */}
                <div className="sticky w-96 xl:w-1/3 py-9 pl-16">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
                {/* Item 2 */}
                <div className="sticky w-96 xl:w-1/3 py-9 px-10">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
                {/* Item 3 */}
                <div className="sticky w-96 xl:w-1/3 py-9 pr-16">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
            </div>
            {/* Item Lists row 3 */}
            <div className="flex">
                {/* Item 1 */}
                <div className="sticky w-96 xl:w-1/3 pb-12 pl-16">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
                {/* Item 2 */}
                <div className="sticky w-96 xl:w-1/3 pb-12 px-10">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
                {/* Item 3 */}
                <div className="sticky w-96 xl:w-1/3 pb-12 pr-16">
                    <div className="relative w-full h-96 bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
                        <div className="absolute top-56 ml-10 [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[normal]">
                            Butter
                        </div>
                        <div className="absolute top-64 mt-2 ml-10 [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[20px] tracking-[0] leading-[normal]">
                            Expires: 23 Oct 2023
                        </div>
                        <button
                            className="absolute mb-7 mr-10 right-0 bottom-0 w-14 h-14 bg-[#1d2387] hover:mb-6 hover:mr-9 hover:w-16 hover:h-16 hover:bg-[#571a56] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
                            onClick={() => handleEdit()}
                        >
                            <img
                                className="w-10 h-10 p-1"
                                alt="Edit"
                                src="https://cdn.discordapp.com/attachments/1151835814939078738/1156153038503952454/0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
                            />
                        </button>
                        <div className="absolute top-72 mt-7 ml-10 [font-family:'Manrope-Regular',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[normal]">
                            Quantities: 3
                        </div>
                        <img
                            className="absolute object-center px-9 py-4 h-[220px] w-full " //center picture
                            alt="butterpic"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156150750003597332/Screenshot_2566-09-06_at_21.18_1.png?ex=6513eccb&is=65129b4b&hm=1066cbe747735931c57408a88a3c4e0ee63f6ec1ee5713fdbf8096547943a965&"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemsFrame;
