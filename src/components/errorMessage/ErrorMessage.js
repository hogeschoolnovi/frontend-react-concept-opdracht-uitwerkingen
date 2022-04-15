import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({ children }) {
  return (
    <p className="error-message">{children}</p>
  );
}

export default ErrorMessage;