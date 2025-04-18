import React, { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';

const TestError = () => {
      const handleConfirmDelete = () => {
        console.log("Item deleted from database.");
      };

      const handleCancelAction = () => {
        console.log("User chose not to proceed.");
      };

  return (
    <div>
      <ErrorMessage
        title="Delete item?"
        message="Do you really want to remove this item permanently?"
        showConfirm
        showCancel
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelAction}
      />
      <ErrorMessage
      title="This is a pop up with the default behavior" />
    </div>
  );
};

export default TestError;
