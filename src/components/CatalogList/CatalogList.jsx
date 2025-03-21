import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import useCatalogFilter from "../../hooks/useCatalogFilter.jsx";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import CatalogFilters from "../CatalogFilters/CatalogFilters.jsx";
import Loader from "../Loader/Loader.jsx";

import { animations } from "../../utils/animation.js";

const CatalogList = ({ fetchApi, catalog }) => {
  const { filteredPsychologists, handleFilterChange, isLoading, error } =
    useCatalogFilter({ catalog });

  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);

  const loadMore = () => {
    setIsLoadMoreLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoadMoreLoading(false);
    }, 1000);
  };

  const handleFavoriteChange = async () => {
    await fetchApi(); // Оновлюємо список після зміни улюблених
  };

  return (
    <div>
      {filteredPsychologists.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations.filter}
        >
          <CatalogFilters onFilterChange={handleFilterChange} />
        </motion.div>
      )}

      {isLoading ? (
        <div className="flex justify-center mt-8">
          <Loader height={80} width={80} color={"green"} />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      ) : filteredPsychologists.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg text-gray-500">No psychologists found.</p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-8">
            {filteredPsychologists
              .slice(0, visibleCount)
              .map((psychologist, index) => (
                <motion.li
                  key={psychologist.id}
                  initial="hidden"
                  animate="visible"
                  variants={animations.listItem}
                  custom={index}
                >
                  <CatalogItem
                    profile={psychologist}
                    onFavoriteChange={handleFavoriteChange}
                  />
                </motion.li>
              ))}
          </ul>

          {visibleCount < filteredPsychologists.length && (
            <motion.div
              className="flex justify-center mt-8 lg:mt-16"
              initial="hidden"
              animate="visible"
              variants={animations.loadMoreButton}
            >
              <motion.button
                onClick={loadMore}
                disabled={isLoadMoreLoading}
                className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
                whileHover="hover"
              >
                {isLoadMoreLoading ? (
                  <span className="flex items-center gap-2">
                    Loading... <Loader height={20} width={20} color="white" />
                  </span>
                ) : (
                  "Load more"
                )}
              </motion.button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

CatalogList.propTypes = {
  fetchApi: PropTypes.func.isRequired,
};

export default CatalogList;
