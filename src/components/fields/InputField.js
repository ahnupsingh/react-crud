
import React from "react";

const InputField = (props) => {
    const { id, label, extra, placeholder, type, className, errors, ...rest } = props;
    return <div className="form-group">
        <label for={id}>{label}</label>
        <input {...rest}
        id={id} 
        type={type}
        className={className}
        placeholder={placeholder} />
        {errors[id] && <span>{errors[id].type}</span>}
    </div>;
}
  
export default InputField;
  