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

    const handleSaveClick = () => {

    };

    const handleDiscardClick = () => {

    };

    const handleDeleteClick = () => {

    };


    return (
        <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
            {/* Account Settings Header */}
            <div className="flex">
                <div className="sticky pt-12 pl-16 font-medium text-4xl text-white">
                    Account Settings
                </div>
            </div>
                {/* Forms */}
            <div className="w-3/5 pl-14 ml-6 mt-24">
                <div className="mb-4">
                    <label className="block text-white text-[21px] mb-2">Email</label>
                    <input
                        type="text"
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
                        className="w-full px-4 py-2 rounded-lg bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                        value={username}
                        onChange={handleUsernameChange}
                        style={{ color: "white" }} // Set text color to white
                    />
                </div>
                {/* Buttons */}
                <div className="mb-4">
                    <button
                        className="w-24 h-12 text-[21px] hover:text-[23px] bg-601F1F-950 hover:bg-601F1F-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={handleDeleteClick}
                    >
                    Delete
                    </button>
                    <button
                        className="w-24 h-12 text-[21px] hover:text-[23px] bg-blue-950 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={handleSaveClick}
                    >
                    Save
                    </button>
                    <button
                        className="w-24 h-12 text-[21px] hover:text-[23px] bg-601F1F-950 hover:bg-601F1F-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={handleDiscardClick}
                    >
                    Discard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountSettingsFrame;
