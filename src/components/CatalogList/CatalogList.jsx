import { useState, useEffect } from "react";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import CatalogFilters from "../CatalogFilters/CatalogFilters.jsx";
import useCatalogFilter from "../../hooks/useCatalogFilter.jsx";
import { v4 as uuidv4 } from "uuid";
import Loader from "../Loader/Loader.jsx";

const CatalogList = ({ fetchApi }) => {
  const { filteredPsychologists, handleFilterChange, sortCriterion } =
    useCatalogFilter({ fetchApi });

  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadMoreLoading, setIsLoadMoreLoading] = useState(false);
  const [updatedList, setUpdatedList] = useState(filteredPsychologists);

  useEffect(() => {
    setUpdatedList(filteredPsychologists);
  }, [filteredPsychologists]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const loadMore = () => {
    setIsLoadMoreLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 3);
      setIsLoadMoreLoading(false);
    }, 1000);
  };

  const handleFavoriteChange = async () => {
    const updatedFavorites = await fetchApi();
    setUpdatedList(updatedFavorites);
  };
  console.log(updatedList);
  return (
    <div>
      {updatedList.length === 0 ? (
        <></>
      ) : (
        <CatalogFilters
          onFilterChange={handleFilterChange}
          sortCriterion={sortCriterion}
        />
      )}

      {isLoading ? (
        <div className="flex justify-center mt-8">
          <Loader height={80} width={80} color={"green"} />
        </div>
      ) : updatedList.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-lg text-gray-500">No psychologists found.</p>
        </div>
      ) : (
        <>
          <ul className="flex flex-col gap-8">
            {updatedList.slice(0, visibleCount).map((psychologist) => (
              <li key={psychologist.id || uuidv4()}>
                <CatalogItem
                  profile={psychologist}
                  onFavoriteChange={handleFavoriteChange}
                />
              </li>
            ))}
          </ul>

          {visibleCount < updatedList.length && (
            <div className="flex justify-center mt-8 lg:mt-16">
              <button
                onClick={loadMore}
                disabled={isLoadMoreLoading}
                className="flex justify-center items-center min-w-[124px] py-3 px-10 bg-primary-color hover:bg-primary-color-hover font-medium text-base text-white leading-tight rounded-[30px] transition-all duration-300"
              >
                {isLoadMoreLoading ? (
                  <span className="flex items-center gap-2">
                    Loading... <Loader height={20} width={20} color="white" />
                  </span>
                ) : (
                  "Load more"
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CatalogList;
