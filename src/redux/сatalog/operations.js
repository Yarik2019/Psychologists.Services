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
      if (!snapshot.exists()) {
        return [];
      }

      return Object.values(snapshot.val());
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Додати психолога в обране для конкретного користувача
export const addToFavorites = createAsyncThunk(
  "favorites/add",
  async ({ userId, psychologist }, thunkAPI) => {
    if (!userId) return thunkAPI.rejectWithValue("User ID is missing");
    if (!psychologist?.id)
      return thunkAPI.rejectWithValue("Invalid psychologist data");

    try {
      const favoriteRef = ref(
        database,
        `users/${userId}/favorites/${psychologist.id}`
      );

      await set(favoriteRef, psychologist);
      successfullyToast("Psychologist added to favorites");

      return psychologist; // Повертаємо доданого психолога
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалити психолога з обраного для конкретного користувача
export const removeFromFavorites = createAsyncThunk(
  "favorites/remove",
  async ({ userId, psychologistId }, thunkAPI) => {
    if (!userId) return thunkAPI.rejectWithValue("User ID is missing");
    if (!psychologistId)
      return thunkAPI.rejectWithValue("Psychologist ID is missing");

    try {
      const favoriteRef = ref(
        database,
        `users/${userId}/favorites/${psychologistId}`
      );
      await remove(favoriteRef);

      successfullyToast("Psychologist removed from favorites");
      return psychologistId; // Повертаємо ID для оновлення Redux-стану
    } catch (error) {
      errToast(`Error: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
