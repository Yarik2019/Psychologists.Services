import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { orderSchemaLogin } from "../../utils/formValidation"; // Перевірте правильність цього імпорту
import icons from "../../assets/icons.svg"; // Якщо використовуєте іконки

const SignInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initForm = {
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
        Log In
      </h2>
      <p className="text-base mb-5 md:mb-10 text-black/50 font-inter leading-tight">
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <Formik
        initialValues={initForm}
        validationSchema={orderSchemaLogin}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="flex flex-col gap-3 md:gap-4.5 mb-5 md:mb-10">
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
                  autoComplete="email" // Додаємо атрибут autocomplete для email
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
                    autoComplete="current-password" // Додаємо атрибут autocomplete для password
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    onClick={togglePasswordVisibility}
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary-color hover:bg-primary-color-hover text-base text-white font-inter font-medium leading-tight rounded-[30px] transition-all duration-300"
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
