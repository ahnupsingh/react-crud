import { classnames } from "../../utils/";
import { emailSchema, passwordSchema } from "./validationSchemas";

/**
 * Basic Input is just a input field with no any wrapper around with reach APIs.
 * This component can be used in replace of native <input /> tag.
 *
 * The component is highly customizable.
 * This component is bulit on top of react-hook-form.
 *
 * Usages:
 * ```js
 * <BasicInput
 *  label={"Email"}
 *  register={register}
 *  errors={errors}
 *  type={"email"}
 *  id={"email"}
 *  placeholder={"enter your email"}
 *  />
 *
 * <BasicInput
 *  label={"Full Name"}
 *  register={register}
 *  errors={errors}
 *  type={"text"}
 *  id={"fullName"}
 *  placeholder={"enter your full Name"}
 *  validationSchema={{
 *  minLength: {
 *  value: 5,
 *  message: "full name should have characters greater than 5"
 *  }
 *  onErrorClassName={'border-red'}
 *  }}
 *  />
 * ```
 *
 *`onErrorClassName` is a css class that is injected to  component if `react-hook-form` throws error for that component 
 */
export function BasicInput({
  type,
  onErrorClassName,
  errors,
  className,
  register,
  id,
  validationSchema,
  ...rest
}) {
  return (
    <input
      type={type}
      className={classnames("form-control", className, {
        [onErrorClassName ?? "has-error"]: !!errors[id],
      })}
      {...register?.(id, {
        ...validationSchema,
        ...(type === "password"
          ? passwordSchema
          : type === "email"
          ? emailSchema
          : undefined),
      })}
      {...rest}
    />
  );
}
BasicInput.defaultProps = {
  type: "text",
  validationSchema: { required: false },
  errors: {},
};
