import { database } from "./firebase";
import { ref, get } from "firebase/database";

export const fetchNannies = async () => {
  const nanniesRef = ref(database, "nannies");
  const snapshot = await get(nanniesRef);
  return snapshot.exists() ? snapshot.val() : [];
};
