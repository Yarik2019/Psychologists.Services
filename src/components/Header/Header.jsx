import { useState } from "react";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/icons.svg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed z-50 bg-gray-100 border-b-[1px] border-[rgba(25, 26, 21, 0.1)] w-full">
      <div className="container-width container-px container-py flex flex-1 gap-10 items-center justify-between">
        <NavLink
          className="text-primary-color text-xl font-inter font-bold leading-[1.2]"
          to="/"
        >
          psychologists.<span className="text-black">services</span>
        </NavLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none lg:hidden"
        >
          {isOpen ? (
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
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-10 w-full lg:w-auto">
            <li className="w-full lg:w-auto text-center">
              <NavLink
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
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="w-full lg:w-auto text-center">
              <NavLink
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
                to="/psychologists"
              >
                Psychologists
              </NavLink>
            </li>
            <li className="w-full lg:w-auto text-center">
              <NavLink
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
                to="/features"
              >
                Favorites
              </NavLink>
            </li>
          </ul>

          <ul className="flex gap-4 lg:hidden">
            <li>
              <button className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]">
                Log In
              </button>
            </li>
            <li>
              <button className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300">
                Registration
              </button>
            </li>
          </ul>

          {/* user name and Log out */}
          {/* <ul className="flex gap-7 lg:hidden">
            <li>
              <button className="flex gap-[14px] justify-center items-center ">
                <div className="flex justify-center items-center w-10 h-10 bg-primary-color rounded-[10px]">
                  <svg className="w-6 h-6 fill-white">
                    <use href={`${sprite}#icon-mdi_user`}></use>
                  </svg>
                </div>
                <p className="text-black text-base font-inter font-medium leading-tight ">
                  Ilona
                </p>
              </button>
            </li>
            <li>
              <button className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]">
                Log out
              </button>
            </li>
          </ul> */}
        </nav>

        {/* Log In  and Registration*/}
        <ul className="hidden gap-4 lg:flex">
          <li>
            <button className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]">
              Log In
            </button>
          </li>
          <li>
            <button className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300">
              Registration
            </button>
          </li>
        </ul>

        {/* user name and Log out */}
        {/* <ul className="hidden gap-7 lg:flex">
            <li>
              <button className="flex gap-[14px] justify-center items-center ">
                <div className="flex justify-center items-center w-10 h-10 bg-primary-color rounded-[10px]">
                  <svg className="w-6 h-6 fill-white">
                    <use href={`${sprite}#icon-mdi_user`}></use>
                  </svg>
                </div>
                <p className="text-black text-base font-inter font-medium leading-tight ">
                  Ilona
                </p>
              </button>
            </li>
            <li>
              <button className="flex justify-center items-center min-w-[124px] py-3 font-medium text-base text-black leading-tight border-[1px] border-solid border-black rounded-[30px]">
                Log out
              </button>
            </li>
          </ul> */}
      </div>
    </header>
  );
};

export default Header;
