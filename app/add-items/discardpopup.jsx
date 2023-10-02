// components/Popup.jsx
'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Popup = ({ onClose }) => {
  const router = useRouter();

  const handleDiscard = () => {
    // Redirect to the /items page when the "No" button is pressed
    router.push('/items');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="w-96 h-64 bg-[#142741] rounded-[35px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%) text-white text-center relative">
        <img
          className="w-20 h-20 mx-auto mt-4"
          src="https://cdn.discordapp.com/attachments/1151835814939078738/1158372555258871808/dc65b7d3af0ed3459dd14a91081b78d6.png?ex=651c0202&is=651ab082&hm=1231bbf1ebf9bd4b94b080ee66f9f64267ac87eff2899cbf003fd6ac413cfaee&"
          alt="Icon"
        />
        <p className="mt-4 mx-3 text-[22px] font-medium">
          Are you sure you want to discard this change?
        </p>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          <button onClick={handleDiscard} className="p-2 w-28 h-9 bg-[#871d1d] text-white font-medium rounded-md text-[18px] hover:bg-[#b85757] transition-all duration-300 ease-in-out items-center">
            <span>Yes</span>
          </button>
          <button onClick={onClose} className="p-2 w-28 h-9 bg-[#1d2387] text-white font-medium rounded-md text-[18px] hover:bg-[#286fb5] transition-all duration-300 ease-in-out">
            <span>No</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;