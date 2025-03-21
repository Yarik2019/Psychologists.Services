import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";
import { orderSchemaReg } from "../../utils/formValidation";
import icons from "../../assets/icons.svg";
import { registerUser } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { animationsForm } from "../../utils/animation";
const SignUpForm = ({ onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    const response = await dispatch(registerUser(values));
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/features");
      onClose();
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationsForm.container}
    >
      <motion.h2
        variants={animationsForm.fadeInUp}
        className="text-2xl lg:text-[40px] mb-5 text-black font-inter font-medium leading-[1.2]"
      >
        Registration
      </motion.h2>
      <motion.p
        variants={animationsForm.fadeInUp}
        className="text-base mb-5 md:mb-10 text-black/50 font-inter leading-tight"
      >
        Thank you for your interest in our platform! Please provide the
        following information to register.
      </motion.p>
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchemaReg}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <motion.div
              variants={animationsForm.fadeInUp}
              className="flex flex-col gap-3 md:gap-4.5 mb-5 md:mb-10"
            >
              <div className="flex flex-col">
                <Field
                  name="name"
                  type="text"
                  id="name"
                  className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    touched.name
                      ? errors.name
                        ? "border-red-500 focus:ring-red-300"
                        : "border-green-500 focus:ring-green-300"
                      : "border-gray-300 focus:ring-blue-300"
                  }`}
                  placeholder="Name"
                  required
                  autoComplete="name"
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="name"
                  component="p"
                />
              </div>

              <div className="flex flex-col">
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    touched.email
                      ? errors.email
                        ? "border-red-500 focus:ring-red-300"
                        : "border-green-500 focus:ring-green-300"
                      : "border-gray-300 focus:ring-blue-300"
                  }`}
                  placeholder="Email"
                  required
                  autoComplete="email"
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="email"
                  component="p"
                />
              </div>

              <div className="flex flex-col">
                <div className="relative">
                  <Field
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      touched.password
                        ? errors.password
                          ? "border-red-500 focus:ring-red-300"
                          : "border-green-500 focus:ring-green-300"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                    placeholder="Password"
                    required
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    onClick={togglePasswordVisibility}
                    aria-label="Toggle Password Visibility"
                  >
                    <svg width="15" height="15" className="fill-current">
                      <use
                        href={`${icons}#${
                          passwordVisible ? "icon-eye" : "icon-eye_off"
                        }`}
                      />
                    </svg>
                  </button>
                </div>
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="password"
                  component="p"
                />
              </div>
            </motion.div>

            <motion.button
              variants={animationsForm.fadeInScale}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-primary-color hover:bg-primary-color-hover text-base text-white font-inter font-medium leading-tight rounded-[30px] transition-all duration-300"
            >
              {isSubmitting ? (
                <span className="flex justify-center">
                  <span>Signing Up</span>{" "}
                  <Loader height={20} width={20} color={"white"} />
                </span>
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default SignUpForm;
