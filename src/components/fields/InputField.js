import React from "react";

const InputField = (props) => {
  const {
    id,
    type,
    className,
    register = () => {},
    label = "",
    placeholder = "",
    errors = {},
    validationSchema={},
    ...rest
  } = props;
  return (
    <div className="form-group">
      {label && <label for={id}>{label}</label>}
      <input
        {...rest}
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        {...register(id, validationSchema)}
      />
      {errors[id] && <span className="text-danger small my-2">{errors[id].type}</span>}
    </div>
  );
};

export default InputField;
