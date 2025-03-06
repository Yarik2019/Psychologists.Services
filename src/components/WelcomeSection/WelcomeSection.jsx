import { homeImage } from "../../assets/ImportImages";
import sprite from "../../assets/icons.svg";
import { NavLink } from "react-router-dom";
const WelcomeSection = () => {
  return (
    <div className="relative z-40 glow-gradient">
      <div className="relative z-40 container-width container-px">
        <div className="flex flex-col items-center xl:flex-row gap-[125px]">
          <div className="mt-12">
            <h1 className="max-w-[595px] text-[80px] mb-5  font-inter font-semibold text-black leading-none">
              The road to the <br />
              <span className="text-primary-color italic transition-all duration-300">
                depths
              </span>
              of the human soul
            </h1>
            <p className="max-w-[510px] mb-10 text-lg font-inter font-medium text-black leading-none">
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </p>
            <div>
              <NavLink
                to="/psychologists"
                className="max-w-[235px] h-[60px] flex items-center py-[18px] px-[50px] bg-primary-color hover:bg-primary-color-hover font-medium text-xl text-white leading-[1.2] rounded-[30px] transition-all duration-300"
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
                <div className="absolute z-10 w-10 h-10 flex justify-center -rotate-15 translate-y-[185px] translate-x-[-33px] items-center bg-primary-color-question rounded-[10px] transition-all duration-300">
                  <svg className="w-4 h-4 fill-white rotate-15">
                    <use href={`${sprite}#icon-solid_question`}></use>
                  </svg>
                </div>
                <div className="absolute z-10 right-0 rotate-15 translate-y-9.5 translate-x-[39px]  w-12 h-12 flex justify-center items-center bg-primary-color-users rounded-[10px]">
                  <svg className="w-[25px] h-[25px] fill-white -rotate-15">
                    <use href={`${sprite}#icon-mdi_users`}></use>
                  </svg>
                </div>
              </div>
              <div className="relative w-[464px] h-[526px]">
                <img className="rounded-[10px]" src={`${homeImage}`} alt="" />
              </div>
              <div className="absolute bottom-[75px] -translate-x-[101px] flex gap-4 w-[311px] p-8 bg-primary-color rounded-[20px] transition-all duration-300">
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
      </div>
      <div className="absolute z-0 bottom-0  right-0 w-[369px] h-[190px] bg-primary-color blur-[500px] transition-all duration-300"></div>
    </div>
  );
};

export default WelcomeSection;
