import { homeImage } from "../../assets/ImportImages";
import sprite from "../../assets/icons.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  textVariants,
  buttonVariants,
  imageVariants,
  cardVariants,
  iconVariants,
} from "../../utils/animation";
const WelcomeSection = () => {
  return (
    <motion.div
      className="container-width container-px transition-all duration-100"
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center xl:flex-row gap-4 md:gap-16 lg:gap-[125px]">
        <div className="mt-18 md:mt-12">
          <motion.h1
            className="w-full lg:max-w-[595px] text-3xl md:text-[80px] mb-3 lg:mb-5 font-inter font-semibold text-black leading-none"
            variants={textVariants}
          >
            The road to the <br />
            <motion.span
              className="text-primary-color italic transition-all duration-300"
              variants={textVariants}
              transition={{ delay: 0.3 }}
            >
              depths
            </motion.span>{" "}
            of the human soul
          </motion.h1>

          <motion.p
            className="w-full lg:max-w-[510px] mb-5 lg:mb-10 text-base lg:text-lg font-inter font-medium text-black leading-none"
            variants={textVariants}
            transition={{ delay: 0.5 }}
          >
            We help you to reveal your potential, overcome challenges and find a
            guide in your own life with the help of our experienced
            psychologists.
          </motion.p>

          <motion.div variants={buttonVariants} transition={{ delay: 0.8 }}>
            <NavLink
              to="/psychologists"
              className="max-w-[250px] lg:max-w-[235px] h-[60px] flex justify-center items-center py-[18px] px-[50px] bg-primary-color hover:bg-primary-color-hover font-medium text-xl text-white leading-[1.2] rounded-[30px] transition-all duration-300"
            >
              Get started
              <motion.svg
                className="ml-4 w-4 h-4 fill-white"
                variants={iconVariants}
              >
                <use href={`${sprite}#icon-arrow_top`}></use>
              </motion.svg>
            </NavLink>
          </motion.div>
        </div>

        <div>
          <motion.div className="relative" variants={imageVariants}>
            <motion.div>
              {/* Анімація значків */}
              <motion.div
                className="absolute z-10 w-10 h-10 flex justify-center -rotate-15 translate-y-[80px] md:translate-y-[185px] translate-x-[-5px] md:translate-x-[-33px] items-center bg-primary-color-question rounded-[10px] transition-all duration-300"
                variants={iconVariants}
                transition={{ delay: 0.6 }}
              >
                <svg className="w-4 h-4 fill-white rotate-15">
                  <use href={`${sprite}#icon-solid_question`}></use>
                </svg>
              </motion.div>

              <motion.div
                className="absolute z-10 right-0 rotate-15 translate-y-9.5 translate-x-[5px] md:translate-x-[39px] w-12 h-12 flex justify-center items-center bg-primary-color-users rounded-[10px]"
                variants={iconVariants}
                transition={{ delay: 0.7 }}
              >
                <svg className="w-[25px] h-[25px] fill-white -rotate-15">
                  <use href={`${sprite}#icon-mdi_users`}></use>
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative z-[1] max-w-[464px] h-auto md:h-[526px]"
              variants={imageVariants}
            >
              <img
                className="rounded-[10px] object-cover"
                src={`${homeImage}`}
                alt="Welcome"
              />
            </motion.div>

            <motion.div
              className="absolute z-10 bottom-5 md:bottom-[75px] translate-x-[-15px] md:-translate-x-[101px] flex gap-4 md:w-[311px] p-4 md:p-8 bg-primary-color rounded-[20px] transition-all duration-300"
              variants={cardVariants}
              transition={{ delay: 0.9 }}
            >
              <motion.div
                className="w-[54px] h-[54px] flex justify-center items-center bg-white rounded-[13px] transition-all duration-300"
                variants={iconVariants}
                transition={{ delay: 1 }}
              >
                <svg className="w-[30px] h-[30px] fill-primary-color transition-all duration-300">
                  <use href={`${sprite}#icon-fe_check`}></use>
                </svg>
              </motion.div>

              <motion.div>
                <motion.p
                  className="text-sm mb-2 font-inter font-normal text-white/50"
                  variants={textVariants}
                >
                  Experienced psychologists
                </motion.p>
                <motion.h3
                  className="text-2xl font-inter font-bold text-white"
                  variants={textVariants}
                >
                  15,000
                </motion.h3>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Фон з ефектом blur */}
      <motion.div
        className="absolute z-0 bottom-0 right-0 w-[300px] h-[300px] bg-primary-color blur-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
      ></motion.div>
    </motion.div>
  );
};

export default WelcomeSection;
