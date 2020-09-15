import React from 'react';
import './ErrorIndicator.scss';


const ErrorIndicator = (props) => {
  const { message } = props;

  return (
    <div className="error-indicator">
      <p>Sry, something got wrong</p>
      <p className="error-message">{message}</p>
    </div>
  )
}

export default ErrorIndicator;
