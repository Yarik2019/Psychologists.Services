import { useState, useEffect, useCallback } from "react";

const useCatalogFilter = ({ fetchApi }) => {
  const [psychologists, setPsychologists] = useState([]);
  const [filteredPsychologists, setFilteredPsychologists] = useState([]);
  const [sortCriterion, setSortCriterion] = useState("all");

  // Завантаження даних із сервера
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi();
        if (Array.isArray(data)) {
          // Видаляємо некоректні дані (null, undefined, без name)
          const validData = data.filter((p) => p && p.name);
          setPsychologists(validData);
          setFilteredPsychologists(validData);
        } else {
          console.error("Invalid data format received from API");
        }
      } catch (error) {
        console.error("Error fetching psychologists:", error);
      }
    };
    fetchData();
  }, [fetchApi]);

  // Функція сортування
  const sortPsychologists = useCallback(
    (list) => {
      return [...list].sort((a, b) => {
        const nameA = a.name || "";
        const nameB = b.name || "";
        const priceA = a.price ?? 0;
        const priceB = b.price ?? 0;
        const ratingA = a.rating ?? 0;
        const ratingB = b.rating ?? 0;

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

  // Викликаємо сортування при зміні критеріїв або списку психологів
  useEffect(() => {
    setFilteredPsychologists(sortPsychologists(psychologists));
  }, [sortCriterion, psychologists, sortPsychologists]);

  // Фільтрація за ціною
  const filterByPrice = (criteria) => {
    const filteredArray =
      criteria === "lessThan10"
        ? psychologists.filter((p) => p.price < 10)
        : criteria === "greaterThan10"
        ? psychologists.filter((p) => p.price > 10)
        : psychologists;

    setFilteredPsychologists(filteredArray);
  };

  // Обробник зміни фільтрів
  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setFilteredPsychologists(psychologists);
    } else if (value === "lessThan10" || value === "greaterThan10") {
      filterByPrice(value);
    } else {
      setSortCriterion(value);
    }
  };

  return { filteredPsychologists, handleFilterChange, sortCriterion };
};

export default useCatalogFilter;
