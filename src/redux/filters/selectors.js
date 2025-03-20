export const selectPsychologists = (state) => state.catalog.psychologists;
export const selectFilteredPsychologists = (state) =>
  state.catalog.filteredPsychologists;
export const selectSortCriterion = (state) => state.catalog.sortCriterion;
export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectError = (state) => state.catalog.error;
