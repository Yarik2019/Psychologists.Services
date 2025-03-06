import { homeImage } from "../../assets/ImportImages";
import sprite from "../../assets/icons.svg";
import { NavLink } from "react-router-dom";
const WelcomeSection = () => {
  return (
    <div className="container-width container-px ">
      <div className="flex gap-[125px]">
        <div className="mt-12">
          <h1 className="max-w-[595px] text-[80px] mb-5  font-inter font-semibold text-black leading-none">
            The road to the <br />
            <span className="text-primary-color italic transition-all duration-300">
              depths
            </span>{" "}
            of the human soul
          </h1>
          <p className="max-w-[510px] mb-10 text-lg font-inter font-medium text-black leading-none">
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </p>
          <div>
            <NavLink className="max-w-[235px] h-[60px] flex items-center py-[18px] px-[50px] bg-primary-color hover:bg-primary-color-hover font-medium text-xl text-white leading-[1.2] rounded-[30px] transition-all duration-300">
              Get started
              <svg className="ml-4 w-4 h-4 fill-white">
                <use href={`${sprite}#icon-arrow_top`}></use>
              </svg>
            </NavLink>
          </div>
        </div>
        <div>
          <div className="w-[464px] h-[526px] ">
            <img className="rounded-[10px]" src={`${homeImage}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
