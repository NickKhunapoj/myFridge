'use client'

import React, { useState } from 'react';

export const AccountSettingsFrame = () => {
    const [selectedOption, setOption] = useState('');
    const [email, setEmail] = useState('');
    const [dpname, setDpname] = useState('');
    const [username, setUsername] = useState('');

    const NotiCheckboxChange = (option) => {
        setOption(option);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleDpnameChange = (e) => {
        setDpname(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleChangeClick = () => {

    };

    const handlePasswordChangeClick = () => {

    };

    const handleSaveClick = () => {

    };

    const handleDiscardClick = () => {

    };

    const handleDeleteClick = () => {

    };

    return (
        // Dashboard Header
        <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
            {/* Account Settings Header */}
            <div className="flex">
                <div className="sticky pt-12 pl-16 font-medium text-4xl text-white">
                    Account Settings
                </div>
            </div>
            <a style={{ color: "gray", position: "absolute", left: "270px", top: "160px", fontSize: "25px" }}>
              Display Name
            </a>
            <a style={{ color: "white", position: "absolute", left: "270px", top: "200px", fontSize: "32px" }}>
              KHUNAPOJ SUTTENON
            </a>
            <div className="flex items-center p-10">
            <img
               src="https://media.discordapp.net/attachments/1151835814939078738/1151836796276199434/imp-profilepic.png?width=412&height=412"
               alt=""
               className="rounded-full w-40 h-40 dark:bg-gray-500 ml-5"
            />
            </div>
            <button
                style={{ position: "absolute", left: "80px", top: "310px" }}
                className="w-30 h-12 text-[21px] hover:text-[23px] bg-green-950 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                onClick={handleChangeClick}
            >
            Change
            </button>
                {/* Forms */}
                <div className="w-3/5 pl-14 ml-6 mt-20">
                <div className="mb-4">
                    <label className="block text-white text-[21px] mb-2">Email</label>
                    <input
                        type="text"
                        placeholder="s65010126XXXXX@email.kmutnb.ac.th"
                        className="w-full px-4 py-2 rounded-lg bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ color: "white" }} // Set text color to white
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-[21px] mb-2">Display Name</label>
                    <input
                        type="text"
                        placeholder="KHUNAPOJ SUTTENON"
                        className="w-full px-4 py-2 rounded-lg bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                        value={dpname}
                        onChange={handleDpnameChange}
                        style={{ color: "white" }} // Set text color to white
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-[21px] mb-2">Username</label>
                    <input
                        type="text"
                        placeholder="KHUNAPOJ"
                        className="w-full px-4 py-2 rounded-lg bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ color: "white" }} // Set text color to white
                    />
                </div>
                {/* Buttons */}
                <div className="mb-4">
                    <a style={{ color: "red", position: "absolute", left: "1120px", top: "360px", fontSize: "18px" }}>
                        Danger Zone
                    </a>
                    <button
                        style={{ position: "absolute", top: "400px", left: "1100px" }}
                        className="w-50 h-12 text-[21px] hover:text-[23px] bg-red-950 hover:bg-red-600 text-center text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={handleDeleteClick}
                    >
                    Delete Account
                    </button>
                    <button
                        style={{ position: "absolute", left: "1000px" }}
                        className="w-40 h-12 text-[21px] hover:text-[23px] bg-blue-950 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={handleSaveClick}
                    >
                    <div className="flex items-center"> {/* Added this div */}
                        <img
                            className="w-10 h-10 p-1"
                            alt="Add"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156637223408648332/6960dd4be832615dbf7fc16139c09381.png?ex=6515b1db&is=6514605b&hm=003f0fa2ea16c2b2aaed6d196421e86c8ceac05bda820d8230228fec2d756eb1&"
                        />
                        <span className="text-[21px] hover:text-[23px] transition-all duration-300 ease-in-out">Save</span> {/* Added text here */}
                    </div>
                    </button>
                    <button
                        style={{ position: "absolute", left: "1200px" }}
                        className="w-40 h-12 text-[21px] hover:text-[23px] bg-red-950 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={handleDiscardClick}
                    >
                    <div className="flex items-center"> {/* Added this div */}
                        <img
                            className="w-10 h-10 p-1"
                            alt="discard"
                            src="https://cdn.discordapp.com/attachments/1151835814939078738/1156637223144394792/44030054813dd4a0f69338ff98f91177.png?ex=6515b1db&is=6514605b&hm=5686ab81a99728b67569d45a02294058f1df8e740911d86f58572b774e5993f1&"
                        />
                        <span className="text-[21px] hover:text-[23px] transition-all duration-300 ease-in-out">Discard</span> {/* Added text here */}
                    </div>
                    </button>
                    <a style={{ color: "white", position: "absolute", left: "80px", top: "690px", fontSize: "21px" }}>
                        Password
                    </a>
                    <button className="text-white text-[20px] mt-8 mb-8 hover:underline" 
                    onClick={handlePasswordChangeClick}>
                        Change password?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountSettingsFrame;
