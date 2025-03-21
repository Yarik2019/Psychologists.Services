import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortCriterion, setPriceFilter } from "../redux/filters/slice";
import { selectIsLoading } from "../redux/сatalog/selectors";

const useCatalogFilter = ({ catalog }) => {
  const Loading = useSelector(selectIsLoading);
  const [psychologists, setPsychologists] = useState([]);
  const [isLoading, setIsLoading] = useState(Loading);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const sortCriterion = useSelector((state) => state.filters.sortCriterion);
  const priceFilter = useSelector((state) => state.filters.priceFilter);

  // Завантаження даних
  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      try {
        const data = Array.isArray(catalog) ? catalog : [];
        setPsychologists(data.filter((p) => p && typeof p.name === "string"));
      } catch (error) {
        setError(error.message);
        console.error("Error fetching psychologists:", error);
        setPsychologists([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [catalog]);

  // Фільтрація за ціною
  const filterByPrice = useCallback(
    (list) => {
      switch (priceFilter) {
        case "lessThan10":
          return list.filter((p) => p.price && p.price < 10);
        case "greaterThan10":
          return list.filter((p) => p.price && p.price > 10);
        default:
          return list;
      }
    },
    [priceFilter]
  );

  // Сортування
  const sortPsychologists = useCallback(
    (list) => {
      return [...list].sort((a, b) => {
        const nameA = a?.name?.toLowerCase() || "";
        const nameB = b?.name?.toLowerCase() || "";
        const priceA = a?.price ?? 0;
        const priceB = b?.price ?? 0;
        const ratingA = a?.rating ?? 0;
        const ratingB = b?.rating ?? 0;

        switch (sortCriterion) {
          case "nameAsc":
            return nameA.localeCompare(nameB);
          case "nameDesc":
            return nameB.localeCompare(nameA);
          case "priceAsc":
            return priceA - priceB;
          case "priceDesc":
            return priceB - priceA;
          case "popular":
            return ratingB - ratingA;
          case "notPopular":
            return ratingA - ratingB;
          default:
            return 0;
        }
      });
    },
    [sortCriterion]
  );

  // Підсумкова фільтрація та сортування
  const filteredPsychologists = useMemo(() => {
    return filterByPrice(sortPsychologists(psychologists));
  }, [psychologists, sortPsychologists, filterByPrice]);

  // Обробник зміни фільтрів
  const handleFilterChange = (value) => {
    if (["all", "lessThan10", "greaterThan10"].includes(value)) {
      dispatch(setPriceFilter(value));
    } else {
      dispatch(setSortCriterion(value));
    }
  };

  return { filteredPsychologists, handleFilterChange, isLoading, error };
};

export default useCatalogFilter;
