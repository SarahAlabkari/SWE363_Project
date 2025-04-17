import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMessage = ({ message = "Something went wrong!", title = "Error", type = "danger" }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '500px', width: '100%' }}>
        <Alert variant={type} className="text-center shadow-lg p-4">
          <h4 className="mb-3">{title}</h4>
          <p>{message}</p>
        </Alert>
      </div>
    </div>
  );
};

export default ErrorMessage;
