import * as Yup from "yup";

const emailValid = Yup.string().required("Email is required");

const passwordValid = Yup.string()
  .min(8, "Password must contain at least 8 characters")
  .matches(/[a-z]/, "The password must contain at least 1 letter in lowercase")
  .matches(/[A-Z]/, "The password must contain at leats 1 letter in uppercase")
  .matches(/\d/, "The password must contain at least 1 number")
  .required("Password is required");

export const orderSchemaLogin = Yup.object({
  email: emailValid,
  password: passwordValid,
});

export const orderSchemaReg = Yup.object({
  email: emailValid,
  password: passwordValid,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
