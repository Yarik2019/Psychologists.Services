import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortCriterion: "all", // Критерій сортування
  priceFilter: "all", // Фільтр за ціною
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSortCriterion: (state, action) => {
      state.sortCriterion = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter = action.payload;
    },
  },
});

export const { setSortCriterion, setPriceFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
