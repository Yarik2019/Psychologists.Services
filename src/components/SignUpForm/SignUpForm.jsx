import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { orderSchemaReg } from "../../utils/formValidation";
import icons from "../../assets/icons.svg";

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initForm = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <h2 className="text-2xl lg:text-[40px] mb-5 text-black font-inter font-medium leading-[1.2]">
        Registration
      </h2>
      <p className="text-base mb-5 md:mb-10 text-black/50 font-inter leading-tight">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <Formik
        initialValues={initForm}
        validationSchema={orderSchemaReg}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="flex flex-col gap-3 md:gap-4.5 mb-5 md:mb-10">
              {/* Name Field */}
              <div className="flex flex-col">
                <Field
                  name="name"
                  type="text"
                  id="name"
                  className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all 
                  ${
                    touched.name
                      ? errors.name
                        ? "border-red-500 focus:ring-red-300"
                        : "border-green-500 focus:ring-green-300"
                      : "border-gray-300 focus:ring-blue-300"
                  }`}
                  placeholder="Name"
                  required
                  autoComplete="name" // Added autocomplete for name
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="name"
                  component="p"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all 
                  ${
                    touched.email
                      ? errors.email
                        ? "border-red-500 focus:ring-red-300"
                        : "border-green-500 focus:ring-green-300"
                      : "border-gray-300 focus:ring-blue-300"
                  }`}
                  placeholder="Email"
                  required
                  autoComplete="email" // Added autocomplete for email
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="email"
                  component="p"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col">
                <div className="relative">
                  <Field
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all 
                    ${
                      touched.password
                        ? errors.password
                          ? "border-red-500 focus:ring-red-300"
                          : "border-green-500 focus:ring-green-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                    placeholder="Password"
                    required
                    autoComplete="new-password" // Added autocomplete for password
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    onClick={togglePasswordVisibility}
                    aria-label="Toggle Password Visibility"
                  >
                    {passwordVisible ? (
                      <svg width="15" height="15" className="text-red-500">
                        <use href={`${icons}#icon-eye`} />
                      </svg>
                    ) : (
                      <svg width="15" height="15" className="fill-current">
                        <use href={`${icons}#icon-eye_off`} />
                      </svg>
                    )}
                  </button>
                </div>
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="password"
                  component="p"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary-color hover:bg-primary-color-hover text-base text-white font-inter font-medium leading-tight rounded-[30px] transition-all duration-300"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
