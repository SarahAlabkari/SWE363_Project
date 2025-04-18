import React, { useState } from 'react';
import ErrorMessage from '../components/Popup';

const TestPopup = () => {
      const handleConfirmDelete = () => {
        console.log("Item deleted from database.");
      };

      const handleCancelAction = () => {
        console.log("User chose not to proceed.");
      };

  return (
    <div>
      <ErrorMessage
      title="This is a pop up with the default behavior" />
      <ErrorMessage
        title="Delete item?"
        message="Do you really want to remove this item permanently?"
        showConfirm
        showCancel
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelAction}
      />
    </div>
  );
};

export default TestPopup;
