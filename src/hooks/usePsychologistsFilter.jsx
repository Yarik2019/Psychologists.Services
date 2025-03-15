import { useState, useEffect } from "react";
import { fetchPsychologists } from "../service/psychologistsService.js";

const usePsychologistsFilter = () => {
  const [psychologists, setPsychologists] = useState([]);
  const [filteredPsychologists, setFilteredPsychologists] = useState([]);
  const [sortCriterion, setSortCriterion] = useState("all");

  useEffect(() => {
    fetchPsychologists().then((data) => {
      setPsychologists(data);
      setFilteredPsychologists(data);
    });
  }, []);

  // Функція для сортування психологів
  const sortPsychologists = () => {
    let sortedArray = [...filteredPsychologists];
    switch (sortCriterion) {
      case "nameAsc":
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "priceAsc":
        sortedArray.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sortedArray.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        sortedArray.sort((a, b) => b.rating - a.rating);
        break;
      case "notPopular":
        sortedArray.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    setFilteredPsychologists(sortedArray);
  };

  // Фільтрація за ціною
  const filterByPrice = (criteria) => {
    let filteredArray;
    if (criteria === "lessThan10") {
      filteredArray = psychologists.filter(
        (psychologist) => psychologist.price < 10
      );
    } else if (criteria === "greaterThan10") {
      filteredArray = psychologists.filter(
        (psychologist) => psychologist.price > 10
      );
    } else {
      filteredArray = psychologists;
    }
    setFilteredPsychologists(filteredArray);
  };

  // Обробка зміни фільтра
  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setFilteredPsychologists(psychologists);
    } else if (value === "lessThan10" || value === "greaterThan10") {
      filterByPrice(value);
    } else {
      setSortCriterion(value);
      sortPsychologists();
    }
  };

  return {
    filteredPsychologists,
    handleFilterChange,
    sortCriterion,
  };
};

export default usePsychologistsFilter;
