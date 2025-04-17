import React, { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';

const TestError = () => {
    const [showDefaultError, setShowDefaultError] = useState(false);
    const [showError, setShowError] = useState(false);

  return (
    <div>
      {showDefaultError ? (
        <ErrorMessage />
      ) : (
        <button onClick={() => setShowDefaultError(true)}>Show Default Error</button>
          )}
          {showError ? (
        <ErrorMessage message='The is a customized error body' title='The is the custom title'/>
      ) : (
        <button onClick={() => setShowError(true)}>Show Customized Error</button>
          )}
    </div>
  );
};

export default TestError;
