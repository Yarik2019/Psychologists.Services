import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sprite from "../../assets/icons.svg";
import Modal from "../Modal/Modal";
import { useToggle } from "../../hooks/useToggle";
import MakeAnAppointment from "../MakeAnAppointment/MakeAnAppointment";
import { animationsReviewsAccordion } from "../../utils/animation";

const ReviewsAccordion = ({ name, avatar, reviews }) => {
  const [isAccordion, setIsAccordion] = useState(false);
  const { isOpen, openModel, closeModel } = useToggle();

  const toggleAccordion = () => {
    setIsAccordion((prev) => !prev);
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <div>
      {!isAccordion && (
        <motion.button
          className="pt-3.5 text-base text-black font-inter font-medium underline hover:no-underline leading-normal transition-all duration-300"
          onClick={toggleAccordion}
          type="button"
          whileHover={animationsReviewsAccordion.button.hover}
          whileTap={animationsReviewsAccordion.button.tap}
        >
          Read more
        </motion.button>
      )}

      <AnimatePresence>
        {isAccordion && (
          <motion.div
            initial={animationsReviewsAccordion.accordion.initial}
            animate={animationsReviewsAccordion.accordion.animate}
            exit={animationsReviewsAccordion.accordion.exit}
            className="overflow-hidden"
          >
            <motion.ul className="flex flex-col gap-6 pt-12 pb-10">
              {reviews.map((review, index) => (
                <motion.li
                  key={index}
                  {...animationsReviewsAccordion.reviewItem(index)}
                >
                  <div>
                    <div className="flex mb-4">
                      <motion.h3
                        className="flex justify-center items-center mr-3 w-11 h-11 text-xl font-inter font-medium leading-none bg-primary-color/20 text-primary-color rounded-full"
                        whileHover={animationsReviewsAccordion.avatar.hover}
                      >
                        {review.reviewer.charAt(0)}
                      </motion.h3>
                      <div>
                        <h3 className="text-base mb-1 text-black font-inter font-medium leading-tight">
                          {review.reviewer}
                        </h3>
                        <div className="flex items-center">
                          <motion.svg
                            className="w-4 h-4 mr-2 fill-primary-color-star"
                            whileHover={
                              animationsReviewsAccordion.starIcon.hover
                            }
                          >
                            <use href={`${sprite}#icon-star`}></use>
                          </motion.svg>
                          <p className="text-sm text-black font-inter font-medium leading-tight">
                            {review.rating}
                          </p>
                        </div>
                      </div>
                    </div>
                    <motion.p
                      className="text-base font-inter text-black/50 leading-tight"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    >
                      {review.comment}
                    </motion.p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              onClick={openModel}
              className="flex justify-center items-center min-w-[124px] py-3.5 px-8 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
              whileHover={animationsReviewsAccordion.button.hover}
              whileTap={animationsReviewsAccordion.button.tap}
            >
              Make an appointment
            </motion.button>

            <Modal isOpen={isOpen} onClose={closeModel}>
              <MakeAnAppointment name={name} avatar={avatar} />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReviewsAccordion;
