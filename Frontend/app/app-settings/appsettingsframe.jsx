'use client'

import React, { useState } from 'react';

export const AppSettingsFrame = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleCheckboxChange = (option) => {
        setSelectedOption(option);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSendClick = () => {
        // Handle sending the email and feedback
        // You can implement the logic here
        console.log('Sending email:', email);
        console.log('Feedback:', feedback);
    };

    return (
        <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
            {/* App Settings Header */}
            <div className="flex">
                <div className="sticky pt-12 pl-16 font-medium text-4xl text-white">
                    App Settings
                </div>
            </div>
            {/* Expiry Day Toggle */}
            <div className="flex">
                {/* Descriptions */}
                <div className="w-2/5 pt-24 pl-16 font-normal text-[24px] text-white">
                    Expiry Date Notifications
                    <div className="font-thin text-[22px] text-white">
                        Adjust settings for notification period before the item expires.
                    </div>
                </div>
                {/* Checkboxes */}
                <div className="w-3/5 pl-14 mt-24">
                    {/* Checkbox 1 */}
                    <div className="flex items-center mb-4">
                        <label
                            htmlFor="option1"
                            className={`cursor-pointer select-none w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center transition-transform duration-300 ease-in-out ${
                                selectedOption === 'Option 1'
                                    ? 'border-red-500 dark:border-red-400 transform scale-110'
                                    : 'hover:border-blue-500 dark:hover:border-blue-400'
                            }`}
                            onClick={() => handleCheckboxChange('Option 1')}
                        >
                            {selectedOption === 'Option 1' && (
                                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                            )}
                        </label>
                        <div className="ml-7 text-[21px] text-white">3 Days</div>
                    </div>

                    {/* Checkbox 2 */}
                    <div className="flex items-center mb-4">
                        <label
                            htmlFor="option2"
                            className={`cursor-pointer select-none w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center transition-transform duration-300 ease-in-out ${
                                selectedOption === 'Option 2'
                                    ? 'border-red-500 dark:border-red-400 transform scale-110'
                                    : 'hover:border-blue-500 dark:hover:border-blue-400'
                            }`}
                            onClick={() => handleCheckboxChange('Option 2')}
                        >
                            {selectedOption === 'Option 2' && (
                                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                            )}
                        </label>
                        <div className="ml-7 text-[21px] text-white">5 Days</div>
                    </div>

                    {/* Checkbox 3 */}
                    <div className="flex items-center mb-4">
                        <label
                            htmlFor="option3"
                            className={`cursor-pointer select-none w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center transition-transform duration-300 ease-in-out ${
                                selectedOption === 'Option 3'
                                    ? 'border-red-500 dark:border-red-400 transform scale-110'
                                    : 'hover:border-blue-500 dark:hover:border-blue-400'
                            }`}
                            onClick={() => handleCheckboxChange('Option 3')}
                        >
                            {selectedOption === 'Option 3' && (
                                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                            )}
                        </label>
                        <div className="ml-7 text-[21px] text-white">1 Week</div>
                    </div>

                    {/* Checkbox 4 */}
                    <div className="flex items-center mb-4">
                        <label
                            htmlFor="option4"
                            className={`cursor-pointer select-none w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center transition-transform duration-300 ease-in-out ${
                                selectedOption === 'Option 4'
                                    ? 'border-red-500 dark:border-red-400 transform scale-110'
                                    : 'hover:border-blue-500 dark:hover:border-blue-400'
                            }`}
                            onClick={() => handleCheckboxChange('Option 4')}
                        >
                            {selectedOption === 'Option 4' && (
                                <div className="w-6 h-6 rounded-full bg-red-500"></div>
                            )}
                        </label>
                        <div className="ml-7 text-[21px] text-white">No Notifications</div>
                    </div>
                </div>
            </div>
            {/* Send Feedback */}
            <div className="flex">
                {/* Descriptions */}
                <div className="w-2/5 pt-24 pl-16 font-normal text-[24px] text-white">
                    Send Feedback
                    <div className="font-thin text-[22px] text-white">
                        Please send your complaints and suggestions here. We appreciate all feedback!
                    </div>
                </div>
                {/* Forms */}
                <div className="w-3/5 pl-14 mr-16 mt-24">
                    <div className="mb-4">
                        <label className="block text-white text-[21px] mb-2">Email</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                            value={email}
                            onChange={handleEmailChange}
                            style={{ color: "white" }} // Set text color to white
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-[21px] mb-2">Feedback</label>
                        <textarea
                            className="w-full px-4 py-2 rounded-lg h-32 bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover:bg-[#41465680] transition-all duration-300 ease-in-out"
                            value={feedback}
                            onChange={handleFeedbackChange}
                            style={{ color: "white" }} // Set text color to white
                        ></textarea>
                    </div>
                    {/* Send Buttons */}
                    <div className="mb-4">
                        <button
                            className="w-24 h-12 text-[21px] hover:text-[21px] bg-blue-950 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={handleSendClick}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSettingsFrame;
