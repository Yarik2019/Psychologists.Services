import { useState } from "react";
import sprite from "../../assets/icons.svg";

const ReviewsAccordion = ({ reviews }) => {
  const [isAccordion, setIsAccordion] = useState(false);

  const toggleAccordion = () => {
    setIsAccordion((prev) => !prev);
  };

  // Return null if no reviews are provided
  if (!reviews || reviews.length === 0) return null;
  return (
    <div>
      {!isAccordion && (
        <button
          className="pt-3.5 text-base text-black font-inter font-medium underline hover:no-underline leading-normal transition-all duration-300"
          onClick={toggleAccordion}
          type="button"
        >
          Read more
        </button>
      )}

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isAccordion ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {isAccordion && (
          <ul className="flex flex-col gap-6 pt-12 pb-10">
            {reviews.map((review, index) => (
              <li key={index}>
                <div>
                  <div className="flex mb-4">
                    <h3 className="flex justify-center items-center mr-3 w-11 h-11 text-xl font-inter font-medium leading-none bg-primary-color/20 text-primary-color rounded-full">
                      {review.reviewer.charAt(0)}
                    </h3>
                    <div>
                      <h3 className="text-base mb-1 text-black font-inter font-medium leading-tight">
                        {review.reviewer}
                      </h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 fill-primary-color-star">
                          <use href={`${sprite}#icon-star`}></use>
                        </svg>
                        <p className="text-sm text-black font-inter font-medium leading-tight">
                          {review.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-inter text-black/50 leading-tight">
                    {review.comment}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button className="flex justify-center items-center min-w-[124px] py-3.5 px-8 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300">
          Make an appointment
        </button>
      </div>
    </div>
  );
};

export default ReviewsAccordion;
