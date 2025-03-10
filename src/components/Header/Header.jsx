import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import { useToggle } from "../../hooks/useToggle";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const {
    isOpen: isSignUpOpen,
    openModel: openSignUp,
    closeModel: closeSignUp,
  } = useToggle();
  const {
    isOpen: isLogInOpen,
    openModel: openLogIn,
    closeModel: closeLogIn,
  } = useToggle();

  return (
    <header className="fixed z-50 bg-gray-100 border-b-[1px] border-[rgba(25, 26, 21, 0.1)] w-full">
      <div className="container-width container-px container-py flex flex-1 gap-10 items-center justify-between">
        <NavLink
          className="text-primary-color text-xl font-inter font-bold leading-[1.2] transition-all duration-300"
          to="/"
        >
          psychologists.<span className="text-black">services</span>
        </NavLink>

        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className="text-black focus:outline-none lg:hidden"
        >
          {isMenu ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <nav
          className={`flex flex-col gap-4 justify-between items-center lg:flex lg:relative lg:bg-transparent py-3 lg:py-0
          absolute top-14 left-0 w-full bg-gray-100 lg:top-0 lg:w-auto transition-all duration-500 ease-in-out 
          ${isMenu ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-10 w-full lg:w-auto">
            {["Home", "Psychologists", "Favorites"].map((text, index) => (
              <li key={index} className="w-full lg:w-auto text-center">
                <NavLink
                  to={`/${text.toLowerCase()}`}
                  className={({ isActive }) =>
                    `relative flex justify-center p-3 lg:p-0 text-base leading-tight text-black font-normal 
                    before:absolute before:bottom-0 lg:before:bottom-[-10px] before:left-1/2 before:-translate-x-1/2 
                    before:w-2 before:h-2 before:rounded-full before:transition-transform before:duration-300 
                    ${
                      isActive
                        ? "before:bg-primary-color before:scale-100"
                        : "before:scale-0"
                    }`
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile buttons */}
          <ul className="flex gap-4 lg:hidden">
            <li>
              <button
                onClick={openLogIn}
                className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]"
              >
                Log In
              </button>
            </li>
            <li>
              <button
                onClick={openSignUp}
                className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
              >
                Registration
              </button>
            </li>
          </ul>
        </nav>

        {/* Desktop buttons */}
        <ul className="hidden gap-4 lg:flex">
          <li>
            <button
              onClick={openLogIn}
              className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]"
            >
              Log In
            </button>
          </li>
          <li>
            <button
              onClick={openSignUp}
              className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
            >
              Registration
            </button>
          </li>
        </ul>
      </div>

      <Modal isOpen={isLogInOpen} onClose={closeLogIn}>
        <SignInForm />
      </Modal>
      <Modal isOpen={isSignUpOpen} onClose={closeSignUp}>
        <SignUpForm />
      </Modal>
    </header>
  );
};

export default Header;
