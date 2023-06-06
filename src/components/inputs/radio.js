import { classnames } from "../../utils";
import { useState } from "react";

/**
 * <Radio defaultValues={{ male: true, female: false }}>
 *   {({ values, handleChange }) => {
 *    console.log(values)
 *     return (
 *       <>
 *         <Radio.Item
 *           id={"male"}
 *           label={"Male"}
 *           checked={values["male"]}
 *           name={"gender"}
 *           onChange={handleChange}
 *         />
 *         <Radio.Item
 *           id={"female"}
 *           label={"Female"}
 *           checked={values["female"]}
 *           onChange={handleChange}
 *           name={"gender"}
 *         />
 *       </>
 *     );
 *   }}
 * </Radio>
 */
export function Radio({ children, defaultValues }) {
  if (!defaultValues) console.warn("it is better to have defaultValues");
  const [values, setValues] = useState(defaultValues ?? {});

  function handleChange(id) {
    for (let key in values) values[key] = false;
    values[id] = true;
    setValues({ ...values });
  }

  return <>{children({ values, handleChange })}</>;
}

Radio.Item = Item;
function Item({
  label,
  inputClassName,
  labelClassName,
  containerClassName,
  id,
  checked,
  onChange,
  value,
  name,
}) {
  return (
    <div className={classnames("form-check", containerClassName)}>
      <input
        className={classnames("form-check-input", inputClassName)}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(id)}
        id={id}
      />
      <label
        className={classnames("form-check-label", labelClassName)}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
