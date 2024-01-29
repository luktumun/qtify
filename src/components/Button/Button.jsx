import React from "react";
import "./Button.css";
const Button = ({ text, className, children }) => {
  return (
    <button className={className}>
      {text}
      {children}
    </button>
  );
};

export default Button;
