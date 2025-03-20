import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchPsychologists,
  fetchFavoritesForUser,
  addToFavorites,
  removeFromFavorites,
} from "./operations";

const initialState = {
  catalog: [],
  favorites: [],
  isLoading: false,
  isError: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.catalog = action.payload;
      })
      .addCase(fetchFavoritesForUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.favorites = action.payload;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.favorites.push(action.payload);
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          fetchPsychologists.pending,
          fetchFavoritesForUser.pending,
          addToFavorites.pending,
          removeFromFavorites.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPsychologists.fulfilled,
          fetchFavoritesForUser.fulfilled,
          addToFavorites.fulfilled,
          removeFromFavorites.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchPsychologists.rejected,
          fetchFavoritesForUser.rejected,
          addToFavorites.rejected,
          removeFromFavorites.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.isError = action.payload;
        }
      );
  },
});

export const catalogReducer = catalogSlice.reducer;
