import { useState } from "react";
import { classnames, generateId } from "../../utils";

/**
 * Example Usages
 * <CheckBox
 *   defaultValues={{ item_1: true, item_2: false, item_3: true }}
 * >
 *   {({ values, handleChange }) => {
 *   console.log(values)
 *     return (
 *       <>
 *         <CheckBox.Item
 *           checked={values["item_1"]}
 *           onChange={handleChange}
 *           id={"item_1"}
 *           label={"Item 1"}
 *         />
 *         <CheckBox.Item
 *           checked={values["item_2"]}
 *           onChange={handleChange}
 *           id={"item_2"}
 *           label={"Item 2"}
 *         />
 *         <CheckBox.Item
 *           checked={values["item_3"]}
 *           onChange={handleChange}
 *           id={"item_3"}
 *           label={"Item 3"}
 *         />
 *       </>
 *     );
 *   }}
 * </CheckBox>
 */
export function CheckBox({ children, defaultValues }) {
  const [values, setValues] = useState(defaultValues ?? {});

  function handleChange(id) {
    values[id] = !values[id];
    setValues({ ...values });
  }
  return <>{children({ values, handleChange })}</>;
}
CheckBox.Item = Item;

/**
 * atomic checkbox
 */
function Item({
  containerClassName,
  label,
  labelClassName,
  id,
  inputClassName,
  onChange,
  disabled,
  checked,
  ...rest
}) {
  return (
    <div className={classnames("form-check", containerClassName)}>
      <input
        className={classnames("form-check-input", inputClassName)}
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onChange(id)}
        disabled={disabled}
        {...rest}
      />
      {label && (
        <label
          className={classnames("form-check-label", labelClassName)}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}

Item.defaultProps = {
  id: generateId(),
  disabled: false,
  checked: false,
};
