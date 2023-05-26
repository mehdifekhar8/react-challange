import React from "react";

import "./Button.css";

const Button = ({ onClick, disabled, icon, children, type }) => {
  const Icon = icon;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button ${disabled ? "disabled" : ""} ${
        !!children ? "with-text" : "without-text"
      } ${type}`}
    >
      {icon && <span className="button-icon">{<Icon />}</span>}
      {!!children && <span className="button-text">{children}</span>}
    </button>
  );
};

export default Button;
