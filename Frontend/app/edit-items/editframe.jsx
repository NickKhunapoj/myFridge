// EditFrame.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function EditFrame({ selectedItem, handleDiscardAction, handleEditAction, handleDeleteAction }) {
  const router = useRouter();

  // Initialize formData with the selected item's data
  const [formData, setFormData] = useState({
    item_name: selectedItem.item_name,
    quantity: selectedItem.quantity,
    expiry_date: selectedItem.expiry_date,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleEdit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append('item_name', formData.item_name);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('expiry_date', formData.expiry_date);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/item/edit/${selectedItem.id}`,
        {
          method: 'PUT',
          body: formDataToSend,
        }
      );

      if (response.ok) {
        // Edit was successful, call handleEditAction()
        handleEditAction();
      } else {
        // Handle the case where the edit request failed
        console.error('Edit failed');
      }
    } catch (error) {
      // Handle any network errors
      console.error('Network error:', error);
    }
  };

  const handleDiscard = () => {
    // Redirect to the discard page or handle discarding changes
    handleDiscardAction();
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/item/delete/${selectedItem.id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        // Delete was successful, call handleDeleteAction()
        handleDeleteAction();
      } else {
        // Handle the case where the delete request failed
        console.error('Delete failed');
      }
    } catch (error) {
      // Handle any network errors
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      {/* Your EditFrame UI here */}
      {/* Include input fields, buttons, etc. to edit the item */}
    </div>
  );
}

export default EditFrame;
