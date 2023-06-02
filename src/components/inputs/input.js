import { classnames, generateId } from "../../utils";
import { BasicInput } from "./basic-input";
/**
 * Input wrapped around 'form-group' and has label and error status text. For atomic input usages, consider using `BasicInput`
 */
export function Input({
  label,
  labelClassName,
  errors,
  id,
  type,
  errorClassName,
  validationSchema,
  ...rest
}) {
  return (
    <div className="form-group">
      {label && (
        <label
          className={classnames(labelClassName)}
          htmlFor={id}
          children={label}
        />
      )}
      <BasicInput
        validationSchema={validationSchema}
        type={type}
        id={id}
        errors={errors}
        {...rest}
      />
      {errors[id] && (
        <span className={classnames("text-danger", "small", errorClassName)}>
          {errors[id].message
            ? errors[id].message
            : errors[id].type === "pattern"
            ? `field does not satisfy constraint ( ${
                Object.hasOwn(validationSchema?.pattern, "value")
                  ? validationSchema["value"]
                  : validationSchema.pattern
              } ).`
            : "input value is not valid."}
        </span>
      )}
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  id: generateId(),
};
