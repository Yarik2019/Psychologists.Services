import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { orderSchemaRegMakeAnAppointment } from "../../utils/formValidation";
import { animationsMakeAnAppointment } from "../../utils/animation";
const initialValues = {
  name: "",
  number: "",
  date: "",
  email: "",
  comment: "",
};

const handleSubmit = (values, { setSubmitting, resetForm }) => {
  console.log("Form submitted:", values);
  setTimeout(() => {
    setSubmitting(false);
    resetForm();
  }, 1000);
};

const MakeAnAppointment = ({ name, avatar }) => {
  return (
    <motion.div initial="initial" animate="animate">
      <motion.h2
        className="text-[40px] mb-5 text-black font-inter font-medium leading-[1.2]"
        {...animationsMakeAnAppointment.fadeInUp(0)}
      >
        Make an appointment with a psychologist
      </motion.h2>
      <motion.p
        className="text-base text-black/50 mb-10 font-inter font-medium leading-tight"
        {...animationsMakeAnAppointment.fadeInUp(0.1)}
      >
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </motion.p>
      <motion.div
        className="flex gap-3.5 mb-10"
        {...animationsMakeAnAppointment.fadeInUp(0.2)}
      >
        <div className="bg-amber-300 w-11 h-11 rounded-[15px]">
          <motion.img
            className="w-full h-full rounded-[15px]"
            src={avatar}
            alt={name}
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div>
          <p className="text-xs text-primary-color-gray font-inter font-medium leading-[1.33]">
            Your psychologists
          </p>
          <h3 className="text-base text-black font-inter font-medium leading-normal">
            {name}
          </h3>
        </div>
      </motion.div>
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchemaRegMakeAnAppointment}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="flex flex-col gap-3 md:gap-4.5 mb-5 md:mb-10">
              <motion.div
                className="flex flex-col"
                {...animationsMakeAnAppointment.fadeInUp(0.3)}
              >
                <Field
                  name="name"
                  type="text"
                  id="name"
                  className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    touched.name
                      ? errors.name
                        ? "border-red-500 focus:ring-red-300"
                        : "border-primary-color focus:ring-primary-color"
                      : "border-gray-300 focus:ring-blue-300"
                  }`}
                  placeholder="Name"
                  autoComplete="name"
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="name"
                  component="p"
                  aria-live="polite"
                />
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row gap-4 md:gap-2"
                {...animationsMakeAnAppointment.fadeInUp(0.4)}
              >
                <div className="flex flex-col">
                  <Field
                    name="number"
                    type="tel"
                    id="number"
                    className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      touched.number
                        ? errors.number
                          ? "border-red-500 focus:ring-red-300"
                          : "border-primary-color focus:ring-primary-color"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                    placeholder="+380"
                    autoComplete="tel"
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm mt-1"
                    name="number"
                    component="p"
                    aria-live="polite"
                  />
                </div>
                <div className="flex flex-col">
                  <Field
                    name="date"
                    type="date"
                    id="date"
                    className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      touched.date
                        ? errors.date
                          ? "border-red-500 focus:ring-red-300"
                          : "border-primary-color focus:ring-primary-color"
                        : "border-gray-300 focus:ring-blue-300"
                    }`}
                  />
                  <ErrorMessage
                    className="text-red-500 text-sm mt-1"
                    name="date"
                    component="p"
                    aria-live="polite"
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col"
                {...animationsMakeAnAppointment.fadeInUp(0.5)}
              >
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all ${
                    touched.email
                      ? errors.email
                        ? "border-red-500 focus:ring-red-300"
                        : "border-primary-color focus:ring-primary-color"
                      : "border-gray-300 focus:ring-blue-300"
                  }`}
                  placeholder="Email"
                  autoComplete="email"
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="email"
                  component="p"
                  aria-live="polite"
                />
              </motion.div>

              <motion.div
                className="flex flex-col"
                {...animationsMakeAnAppointment.fadeInUp(0.6)}
              >
                <Field
                  name="comment"
                  as="textarea"
                  id="comment"
                  rows="4"
                  className="w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all border-gray-300 focus:ring-blue-300"
                  placeholder="Comment"
                  autoComplete="off"
                />
                <ErrorMessage
                  className="text-red-500 text-sm mt-1"
                  name="comment"
                  component="p"
                  aria-live="polite"
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-primary-color hover:bg-primary-color-hover text-base text-white font-inter font-medium leading-tight rounded-[30px] transition-all duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={animationsMakeAnAppointment.button.hover}
              whileTap={animationsMakeAnAppointment.button.tap}
              {...animationsMakeAnAppointment.fadeInUp(0.7)}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default MakeAnAppointment;
