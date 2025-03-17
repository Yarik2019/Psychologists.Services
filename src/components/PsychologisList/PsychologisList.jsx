import { useState, useEffect } from "react";
import PsychologisItem from "../PsychologisItem/PsychologisItem";
import usePsychologistsFilter from "../../hooks/usePsychologistsFilter.jsx";
import PsychologisFilter from "../PsychologisFilter/PsychologisFilter.jsx";
import { v4 as uuidv4 } from "uuid";

const PsychologisList = () => {
  const { filteredPsychologists, handleFilterChange, sortCriterion } =
    usePsychologistsFilter();

  const generatedId = uuidv4();

  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);

  // Ефект для імітації завантаження сторінки
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Симуляція завантаження (1 секунда)
  }, []);

  const loadMore = () => {
    setIsLoadMoreLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 3);
      setIsLoadMoreLoading(false);
    }, 1000);
  };

  return (
    <div>
      <PsychologisFilter
        onFilterChange={handleFilterChange}
        sortCriterion={sortCriterion}
      />

      {isLoading ? (
        <div className="flex justify-center mt-8">
          <p className="text-lg text-gray-500">Loading psychologists...</p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-8">
            {filteredPsychologists
              ?.slice(0, visibleCount)
              .map((psychologist, index) => (
                <li key={index}>
                  <PsychologisItem
                    profile={{ ...psychologist, id: generatedId }}
                    userId={index}
                  />
                </li>
              ))}
          </ul>

          {visibleCount < filteredPsychologists.length && (
            <div className="flex justify-center mt-8 lg:mt-16">
              <button
                onClick={loadMore}
                disabled={isLoadMoreLoading}
                className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
              >
                {isLoadMoreLoading ? "Loading..." : "Load more"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PsychologisList;
