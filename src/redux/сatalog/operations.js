import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, get, set, remove } from "firebase/database";
import { database } from "../../service/firebase";
import { errToast, successfullyToast } from "../../utils/toast";

// Отримати всіх психологів
export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchAll",
  async (_, thunkAPI) => {
    try {
      const psychologistsRef = ref(database, "psychologists");
      const snapshot = await get(psychologistsRef);
      successfullyToast("Data psychologists loaded");
      return snapshot.val() ? Object.values(snapshot.val()) : [];
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримати список улюблених психологів для конкретного користувача
export const fetchFavoritesForUser = createAsyncThunk(
  "favorites/fetchAll",
  async ({ userId }, thunkAPI) => {
    if (!userId) return thunkAPI.rejectWithValue("User ID is missing");

    try {
      const favoritesRef = ref(database, `users/${userId}/favorites`);
      const snapshot = await get(favoritesRef);
      successfullyToast("Data favorites loaded");

      return snapshot.val() ? Object.values(snapshot.val()) : [];
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Додати психолога в обране
export const addToFavorites = createAsyncThunk(
  "favorites/add",
  async ({ userId, psychologist }, thunkAPI) => {
    try {
      if (!userId) throw new Error("User не авторизований");
      if (!psychologist?.id) throw new Error("Invalid psychologist data");

      const favoriteRef = ref(
        database,
        `users/${userId}/favorites/${psychologist.id}`
      );
      await set(favoriteRef, psychologist);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалити психолога з обраного
export const removeFromFavorites = createAsyncThunk(
  "favorites/remove",
  async ({ userId, psychologistId }, thunkAPI) => {
    try {
      if (!userId) throw new Error("User не авторизований");
      if (!psychologistId) throw new Error("Psychologist ID is missing");

      const favoriteRef = ref(
        database,
        `users/${userId}/favorites/${psychologistId}`
      );
      await remove(favoriteRef);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
