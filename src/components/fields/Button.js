import React from "react";

const Button = (props) => {
  const {type, className, icon, text, ...rest } =
    props;
  return (
    <button
      className={`btn ${className}`}
      type={type}
      {...rest}
    >
      {icon && <i className={`${icon} mr-2`}></i>}{text}
    </button>
  );
};

export default Button;
