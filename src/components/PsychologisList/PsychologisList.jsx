import { useState } from "react";
import PsychologisItem from "../PsychologisItem/PsychologisItem";
import usePsychologistsFilter from "../../hooks/usePsychologistsFilter.jsx";
import PsychologisFilter from "../PsychologisFilter/PsychologisFilter.jsx";

const PsychologisList = () => {
  const { filteredPsychologists, handleFilterChange, sortCriterion } =
    usePsychologistsFilter();

  // Створюємо стан для контролю кількості показаних психологів
  const [visibleCount, setVisibleCount] = useState(3);

  // Функція для завантаження більшої кількості психологів
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Завантажуємо 3 нові картки
  };

  return (
    <div className="">
      <PsychologisFilter
        onFilterChange={handleFilterChange}
        sortCriterion={sortCriterion}
      />

      {/* Виводимо психологів з обмеженням по кількості видимих карток */}
      <ul className="flex flex-col gap-8">
        {filteredPsychologists
          ?.slice(0, visibleCount)
          .map((psychologist, index) => (
            <li key={index}>
              <PsychologisItem profile={psychologist} />
            </li>
          ))}
      </ul>

      {/* Кнопка "Load more", яка буде з'являтися після 3 карток */}
      {visibleCount < filteredPsychologists.length && (
        <div className="flex justify-center mt-8 lg:mt-16">
          <button
            onClick={loadMore}
            className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default PsychologisList;
