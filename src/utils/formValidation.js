import * as Yup from "yup";

const emailValid = Yup.string()
  .email("Invalid email format")
  .min(3, "Minimum 3 characters")
  .max(50, "Maximum 50 characters")
  .required("Email is required");

const passwordValid = Yup.string()
  .min(3, "Minimum 3 characters")
  .max(50, "Maximum 50 characters")
  .matches(/[a-zA-Z]/, "Must contain a letter")
  .matches(/[0-9]/, "Must contain numbers")
  .required("Password is required");

const nameValid = Yup.string()
  .min(3, "Minimum 3 characters")
  .max(50, "Maximum 50 characters")
  .required("Name is required");

const numberValid = Yup.string()
  .matches(/^\+?[0-9]+$/, "Invalid phone number")
  .required("Required");

const timeValid = Yup.string()
  .oneOf(
    ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
    "Invalid time slot"
  )
  .required("Time is required");

const commentValid = Yup.string();

export const orderSchemaLogin = Yup.object({
  email: emailValid,
  password: passwordValid,
});

export const orderSchemaReg = Yup.object({
  name: nameValid,
  email: emailValid,
  password: passwordValid,
});

export const orderSchemaRegMakeAnAppointment = Yup.object().shape({
  name: nameValid,
  number: numberValid,
  time: timeValid,
  email: emailValid,
  comment: commentValid,
});
