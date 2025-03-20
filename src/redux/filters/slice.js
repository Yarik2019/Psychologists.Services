import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologists } from "./operations";

const initialState = {
  psychologists: [],
  filteredPsychologists: [],
  sortCriterion: "all",
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setSortCriterion: (state, action) => {
      state.sortCriterion = action.payload;
    },
    setFilteredPsychologists: (state, action) => {
      state.filteredPsychologists = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.psychologists = action.payload;
        state.filteredPsychologists = action.payload;
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSortCriterion, setFilteredPsychologists } =
  catalogSlice.actions;
export default catalogSlice.reducer;
