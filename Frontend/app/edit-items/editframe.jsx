'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { headers } from '@/next.config';
var cookie = require('js-cookie');


function EditFrame({ selectedItem, handleDiscardAction, handleEditAction, handleDeleteAction, handleAlreadyExistedAction }) {
  const router = useRouter();
  console.log(window.location.href)
  const searchParams = useSearchParams('id')
  var id = searchParams.get("id")
  var selectedItemVariable;
  console.log('patameter ', id)
  const [formData, setFormData] = useState({
    item_name: '',
    quantity: '',
    expiry_date: '',
    item_picture: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, item_picture: file });
  };

  const fetchItemData = async () => {

    try {
      console.log("111111111111111", id)
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/item/edit?items_id=${id}`, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + `${cookie.get('token')}`,
        }
      });

      var returnVal = await response.json();
      selectedItemVariable = returnVal

      console.log("Return Val ->>>", returnVal);
      if (response.ok) {
        var itemData = returnVal
        console.log("item data : ", itemData)
        itemData.data.expiry_date = itemData.data.expiry_date.split('T')[0]
        setFormData({ ...formData, ...itemData.data });
      }
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  };

  useEffect(() => {
    fetchItemData();
    console.log("Fetched");
  }, [selectedItem]);

  const handleEdit = async () => {
    // selectedItemVariable = JSON.parse(selectedItemVariable)
    console.log("Selected ", selectedItemVariable, " formdata : ", formData);
    // if (selectedItemVariable && id) {
    // var objSend = {
    //   'item_name': formData.item_name,
    //   'quantity': formData.quantity,
    //   'expiry_date': formData.expiry_date,
    //   'item_picture': formData.item_picture
    // }
    const formDataToSend = new FormData();
    formDataToSend.append('item_name', formData.item_name);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('expiry_date', formData.expiry_date);
    formDataToSend.append('item_picture', formData.item_picture);
    const data = new URLSearchParams();
    for (const pair of formDataToSend) {
      data.append(pair[0], pair[1]);
    }
    console.log(formDataToSend)
    // JSON.stringify(objSend)
    // console.log('formDataToSend : ', objSend)

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/item/edit?items_id=${id}`, {
      headers: {
        'Authorization': 'Bearer ' + `${cookie.get('token')}`,
      },
      method: 'PUT',
      body: data
    });
    var responseData = await response.json()
    console.log('responseData : ', responseData)
    if (response.ok) {
      // Edit was successful, call handleEditAction()
      handleEditAction();
    } else {
      // Registration failed, call handleAlreadyExistedAction()
      handleAlreadyExistedAction();
    }
    // }
  };

  const handleDiscard = () => {
    // Redirect to the discard page
    handleDiscardAction();
  };

  const handleDelete = () => {
    // Redirect to the delete page
    handleDeleteAction();
  };

  return (
    <div className="sticky h-[calc(100vh-148px)] overflow-auto bg-[#21253180] rounded-[40px] shadow-[0px_0px_10px_8px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100">
      {/* Add item Header */}
      <div className="sticky w-3/5 pt-12 pl-16 font-medium text-4xl text-white">
        Items
      </div>
      {/* Add item menu */}
      <div className="sticky w-full h-[calc(90vh-120px)] p-16">
        <div className="sticky w-full h-full bg-[#142741] rounded-[33px] shadow-[0px_0px_10px_3px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
          <div className="flex relative pt-14 px-14 [font-family:'Manrope-SemiBold',Helvetica] font-SemiBold text-[#ffffff] text-3xl tracking-[0] leading-[normal]">
            <img
              className="w-10 h-10 pl-1 mr-5"
              alt="Edit"
              src="./0d622ecf015f0b97491b26ed4f4d9e38.png?ex=6513eeec&is=65129d6c&hm=6c3d177f07d4df5e0e8914df198e3b1fdf9cc04e5d16a8926b4428e3c51a4bb7&"
            />
            Editing Item
          </div>
          <div className="flex">
            <div className="sticky w-64 px-14 pt-10 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
              Name
            </div>
            <input
              type="text"
              name="item_name"
              value={formData.item_name}
              onChange={handleInputChange}
              className="w-52 mt-5 pl-2 text-white rounded-xl bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover.bg-[#41465680] transition-all duration-300 ease-in-out"
              placeholder={formData.item_name}
            />
          </div>

          <div className="flex">
            <div className="sticky w-64 px-14 pt-8 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
              Quantity
            </div>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-52 mt-4 pl-2 text-white rounded-xl bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover.bg-[#41465680] transition-all duration-300 ease-in-out"
              placeholder={formData.quantity}
            />
          </div>
          <div className="flex">
            <div className="sticky w-64 px-14 pt-8 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
              Expiry Date
            </div>
            <input
              type="date"
              name="expiry_date"
              value={formData.expiry_date}
              onChange={handleInputChange}
              className="w-52 mt-4 pl-2 text-white rounded-xl bg-[#40404099] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark:text-gray-100  hover.bg-[#41465680] transition-all duration-300 ease-in-out"
              style={{ color: 'white' }}
              placeholder={formData.expiry_date}
            />
            <div className="sticky pl-10 pt-6 pb-2 [font-family:'Manrope-normal',Helvetica] font-normal text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
              Image
            </div>
            <input
              type="file"
              name="item_picture"
              onChange={handleFileChange}
              className="w-1/5 mt-6 ml-8 rounded-xl bg-[#21253180] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] dark.text-gray-100 hover.bg-[#41465680] transition-all duration-300 ease-in-out"
              style={{ color: 'white' }}
              placeholder="Upload Image"
            />
          </div>
          <div className="flex">
            <button
              className="sticky mt-12 ml-14 w-40 h-14 bg-[#1d2387] hover.text-[23px] hover.bg-[#286fb5] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
              onClick={handleEdit}
            >
              <div className="flex items-center">
                <img
                  className="w-10 h-10 p-1"
                  alt="Add"
                  src="./6960dd4be832615dbf7fc16139c09381.png?ex=6515b1db&is=6514605b&hm=003f0fa2ea16c2b2aaed6d196421e86c8ceac05bda820d8230228fec2d756eb1&"
                />
                <span className="text-[21px] hover.text-[23px] text-white font-medium transition-all duration-300 ease-in-out">Save</span>
              </div>
            </button>
            <button
              className="sticky mt-12 ml-10 w-40 h-14 bg-[#871d1d] hover.text-[23px] hover.bg-[#b85757] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
              onClick={handleDiscard}
            >
              <div className="flex items-center">
                <img
                  className="w-10 h-10 p-1"
                  alt="discard"
                  src="./44030054813dd4a0f69338ff98f91177.png?ex=6515b1db&is=6514605b&hm=5686ab81a99728b67569d45a02294058f1df8e740911d86f58572b774e5993f1&"
                />
                <span className="text-[21px] hover.text-[23px] text-white font-medium transition-all duration-300 ease-in-out">Discard</span>
              </div>
            </button>
            <button
              className="sticky mt-12 ml-40 w-40 h-14 bg-[#871d1d] hover.text-[23px] hover.bg-[#b85757] transition-all duration-300 ease-in-out rounded-[10px] flex justify-center items-center"
              onClick={handleDelete}
            >
              <div className="flex items-center">
                <img
                  className="w-10 h-10 p-1"
                  alt="discard"
                  src="./icons8-delete-96.png"
                />
                <span className="text-[21px] hover.text-[23px] text-white font-medium transition-all duration-300 ease-in-out">Delete</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFrame;
