'use client'
import 'app/globals.css';
import React, { useState } from "react";
import { Topmenubar } from "app/topmenubar";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    username: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async() => {
    // Check if all required fields are filled
    if (
      formData.email &&
      formData.displayName &&
      formData.username &&
      formData.password &&
      formData.confirmPassword &&
      formData.dateOfBirth
    ) {
      // const authHeader = 'Basic ' + btoa(formData.username + ':' + formData.password);
      // All required fields are filled, proceed with registration
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/register", {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          dpname: formData.displayName,
          username: formData.username,
          password: formData.password,
          dob: formData.dateOfBirth})
    });
      router.push('/');
    } else {
      // Display an error message or take other actions to handle the incomplete form
      alert("Please fill in all required fields.");
    }
  };

  // Function to bypass form and go to login
  const bypassForm = () => {
    router.push('/'); // Replace 'login' with the actual login page URL
  };

  return (
    <div className="font-Manrope">
      <div className="gradient-background flex relative w-full h-full justify-center items-center">
        <Topmenubar />
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required // Add the required attribute
                />
              </div>
              <div className="mb-4">
                <label className="text-white text-lg ml-4">Display name</label>
                <input
                  type="text"
                  className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-1.5"
                  placeholder="Enter your display name"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  required // Add the required attribute
                />
              </div>
              <div className="mb-4">
                <label className="text-white text-lg ml-4">Username</label>
                <input
                  type="text"
                  className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-1.5"
                  placeholder="Enter your username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required // Add the required attribute
                />
              </div>
              <div className="mb-4">
                <label className="text-white text-lg ml-4">Password</label>
                <input
                  type="password"
                  className="text-white w-full bg-[#40404099] rounded-md mb-0.5 px-4 py-1.5"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required // Add the required attribute
                />
              </div>
              <div className="mb-4">
                <label className="text-white text-lg ml-4">Confirm Password</label>
                <input
                  type="password"
                  className="text-white w-full bg-[#40404099] rounded-md px-4 py-1.5"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required // Add the required attribute
                />
              </div>
              <div className="mb-2">
                <label className="text-white text-lg ml-4">Date of Birth</label>
              </div>
              <div className="mb-4">
                <input
                  type="date"
                  className="text-white w-full bg-[#40404099] rounded-md px-4 py-1.5"
                  style={{ color: "white" }} // Set text color to white
                  placeholder="Select Expiry Date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required // Add the required attribute
                />
              </div>
              <button
                className="w-full bg-[#1d2387] font-family:'Manrope-Regular',Helvetica font-normal text-white text-[30px] text-center tracking-[0] rounded-md py-2 text-xl hover:bg-blue-900 transition duration-300 mt-2"
                type="button"
                onClick={handleLogin}
              >
                Continue
              </button>
            </form>
            <p className="text-[#979fa9] text-[18px] text-left mb-3 ml-5">
              By registering, you agree to myFridge’s Terms of service and privacy
            </p>
            <button className="text-[#4950f9] text-[18px] left ml-5 mt-6 mb-8 hover:underline"
              onClick={bypassForm}>
              Already have myFridge account?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
