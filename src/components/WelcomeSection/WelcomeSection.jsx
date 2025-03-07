import { useContext, useEffect } from "react";
import { homeImage } from "../../assets/ImportImages";
import sprite from "../../assets/icons.svg";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
const WelcomeSection = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", theme);
  }, [theme]);
  return (
    <div className="container-width container-px relative  before:absolute before:bottom-0 before:right-0 before:bg-primary-color before:blur-[700px] before:w-100 before:h-100 transition-all duration-100">
      <div className=" flex flex-col items-center xl:flex-row gap-4 md:gap-16 lg:gap-[125px]">
        <div className="mt-18 md:mt-12">
          <h1 className="w-full lg:max-w-[595px] text-3xl md:text-[80px] mb-3 lg:mb-5 font-inter font-semibold text-black leading-none">
            The road to the <br />
            <span className="text-primary-color italic transition-all duration-300">
              depths
            </span>{" "}
            of the human soul
          </h1>
          <p className="w-full lg:max-w-[510px] mb-5 lg:mb-10 text-base lg:text-lg font-inter font-medium text-black leading-none">
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <div>
            <NavLink
              to="/psychologists"
              className="max-w-[250px] lg:max-w-[235px] h-[60px] flex justify-center items-center py-[18px] px-[50px] bg-primary-color hover:bg-primary-color-hover font-medium text-xl text-white leading-[1.2] rounded-[30px] transition-all duration-300"
            >
              Get started
              <svg className="ml-4 w-4 h-4 fill-white">
                <use href={`${sprite}#icon-arrow_top`}></use>
              </svg>
            </NavLink>
          </div>
        </div>
        <div>
          <div className="relative">
            <div>
              <div className="absolute z-10 w-10 h-10 flex justify-center -rotate-15 translate-y-[80px] md:translate-y-[185px]  translate-x-[-5px]  md:translate-x-[-33px] items-center bg-primary-color-question rounded-[10px] transition-all duration-300">
                <svg className="w-4 h-4 fill-white rotate-15">
                  <use href={`${sprite}#icon-solid_question`}></use>
                </svg>
              </div>
              <div className="absolute z-10 right-0 rotate-15 translate-y-9.5  translate-x-[5px] md:translate-x-[39px]  w-12 h-12 flex justify-center items-center bg-primary-color-users rounded-[10px]">
                <svg className="w-[25px] h-[25px] fill-white -rotate-15">
                  <use href={`${sprite}#icon-mdi_users`}></use>
                </svg>
              </div>
            </div>
            <div className="relative z-[1] max-w-[464px] h-auto md:h-[526px]">
              <img
                className="rounded-[10px] object-cover"
                src={`${homeImage}`}
                alt=""
              />
            </div>
            <div className="absolute z-10 bottom-5 md:bottom-[75px] translate-x-[-15px] md:-translate-x-[101px] flex gap-4 md:w-[311px] p-4 md:p-8 bg-primary-color rounded-[20px] transition-all duration-300">
              <div className="w-[54px] h-[54px] flex justify-center items-center bg-white rounded-[13px] transition-all duration-300">
                <svg className="w-[30px] h-[30px] fill-primary-color transition-all duration-300">
                  <use href={`${sprite}#icon-fe_check`}></use>
                </svg>
              </div>
              <div>
                <p className="text-sm mb-2 font-inter font-normal text-white/50">
                  Experienced psychologists
                </p>
                <h3 className="text-2xl font-inter font-bold text-white">
                  15,000
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Фон з ефектом blur */}
      <div
        className="absolute z-0 bottom-0 right-0 w-[100px] h-[100px] blur-[500px] transition-all duration-300"
        style={{ backgroundColor: theme }}
      ></div>
    </div>
  );
};

export default WelcomeSection;
