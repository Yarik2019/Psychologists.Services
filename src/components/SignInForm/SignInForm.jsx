import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { orderSchemaLogin } from "../../utils/formValidation";

const SignInForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initForm = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <h2 className="text-[40px] mb-5 text-black font-inter font-medium leading-[1.2]">
        Log In
      </h2>
      <p className="text-base mb-10 text-black/50 font-inter  leading-tight">
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <Formik
        initialValues={initForm}
        validationSchema={orderSchemaLogin}
        onSubmit={handleSubmit}
      >
        {/* {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}></label>
              <Field
                name="email"
                type="email"
                id="email"
                className={`${styles.input} ${
                  touched.email
                    ? errors.email
                      ? styles.error
                      : styles.success
                    : ""
                }`}
                placeholder={t("signIn.enterEmail")}
                required
              />
              <ErrorMessage
                className={styles.errorMessage}
                name="email"
                component="p"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                {t("signIn.password")}
              </label>
              <div className={styles.passwordWrapper}>
                <Field
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className={`${styles.input} ${
                    touched.password
                      ? errors.password
                        ? styles.error
                        : styles.success
                      : ""
                  }`}
                  placeholder={t("signIn.enterPassword")}
                  required
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <svg
                      width="15"
                      height="15"
                      className={`${styles.eye} ${
                        touched.password
                          ? errors.password
                            ? styles.error
                            : styles.success
                          : ""
                      }`}
                    >
                      <use href={`${sprite}#icon-eye`}></use>
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      className={`${styles.eye} ${
                        touched.password
                          ? errors.password
                            ? styles.error
                            : styles.success
                          : ""
                      }`}
                    >
                      <use href={`${sprite}#icon-eye-off`}></use>
                    </svg>
                  )}
                </button>
              </div>
              <ErrorMessage
                className={styles.errorMessage}
                name="password"
                component="p"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={styles.submitButton}
            >
              {t("signIn.signIn")}{" "}
              {isLoading && (
                <span className={styles.loaderBtn}>
                  <Loader />
                </span>
              )}
            </button>
          </Form>
        )} */}
      </Formik>
      <button className="flex justify-center items-center w-full py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300">
        Log In
      </button>
    </div>
  );
};

export default SignInForm;
