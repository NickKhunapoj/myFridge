import React from 'react';

function DiscardPopup({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Confirm Discard</h2>
        <p>Are you sure you want to discard your changes?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
}

export default DiscardPopup;