export const passwordSchema = {
  pattern: {
    value: /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;'"\\|,<.>/?]{8,}$/,
    message: "password is weak",
  },
  required: "password is required",
};

export const emailSchema = {
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/i,
    message: "email must be valid.",
  },
  required: "email is required",
};

export function getDefaultValidationSchema(type) {
  const lookup = { email: emailSchema, password: passwordSchema };
  return lookup[type];
}
