import { ErrorMessage, Field, Form, Formik } from "formik";
import { orderSchemaRegMakeAnAppointment } from "../../utils/formValidation";

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
    <div>
      <h2 className="text-[40px] mb-5 text-black font-inter font-medium leading-[1.2]">
        Make an appointment with a psychologist
      </h2>
      <p className="text-base text-black/50 mb-10 font-inter font-medium leading-tight">
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div className="flex gap-3.5 mb-10">
        <div className="bg-amber-300 w-11 h-11 rounded-[15px]">
          <img
            className="w-full h-full rounded-[15px]"
            src={avatar}
            alt={name}
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
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={orderSchemaRegMakeAnAppointment}
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
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-2">
                {/* Phone Number */}
                <div className="flex flex-col">
                  <Field
                    name="number"
                    type="tel"
                    id="number"
                    className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all 
                        ${
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

                {/* Date Picker */}
                <div className="flex flex-col">
                  <Field
                    name="date"
                    type="date"
                    id="date"
                    className={`w-full py-4 px-4.5 text-black font-inter font-normal leading-tight border-1 border-solid rounded-xl focus:outline-none focus:ring-2 transition-all 
                        ${
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
              </div>

              {/* Comment Field */}
              <div className="flex flex-col">
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
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-primary-color hover:bg-primary-color-hover text-base text-white font-inter font-medium leading-tight rounded-[30px] transition-all duration-300 
                ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MakeAnAppointment;
