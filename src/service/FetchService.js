import { ref, get, set, remove } from "firebase/database";
import { database } from "./firebase";

// Отримати всіх психологів
export const fetchPsychologists = async () => {
  try {
    const psychologistsRef = ref(database, "psychologists");
    const snapshot = await get(psychologistsRef);
    return snapshot.exists() ? Object.values(snapshot.val()) : [];
  } catch (error) {
    console.error("Помилка отримання психологів:", error);
    return [];
  }
};

// Отримати список улюблених психологів для конкретного користувача
export const fetchFavoritesForUser = async (userId) => {
  if (!userId) return [];

  const favoritesRef = ref(database, `users/${userId}/favorites`);
  const snapshot = await get(favoritesRef);

  return snapshot.exists() ? Object.values(snapshot.val()) : [];
};

// Додати психолога в обране для конкретного користувача
export const addToFavorites = async (userId, psychologist) => {
  if (!userId) throw new Error("User не авторизований");

  const favoriteRef = ref(
    database,
    `users/${userId}/favorites/${psychologist.id}`
  );
  await set(favoriteRef, psychologist);
};

// Видалити психолога з обраного для конкретного користувача
export const removeFromFavorites = async (userId, psychologist) => {
  if (!userId) throw new Error("User не авторизований");

  const favoriteRef = ref(
    database,
    `users/${userId}/favorites/${psychologist.id}`
  );
  await remove(favoriteRef);
};
