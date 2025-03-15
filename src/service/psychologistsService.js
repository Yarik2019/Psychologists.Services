import { database } from "./firebase";
import { ref, get } from "firebase/database";

export const fetchPsychologists = async () => {
  const psychologistsRef = ref(database, "psychologists");
  const snapshot = await get(psychologistsRef);
  return snapshot.exists() ? snapshot.val() : [];
};
