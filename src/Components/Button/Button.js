import React from 'react';
import './Button.css';
const Button = ({ onClick, disabled, icon, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${disabled ? 'disabled' : ''}`}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;