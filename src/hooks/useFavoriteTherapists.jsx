// hooks/useFavoriteTherapists.js
import { useState, useEffect } from "react";
import { db } from "../service/firebase";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";

const useFavoriteTherapists = (userId, psychologistId) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!userId || !psychologistId) return;

    const checkFavorite = async () => {
      const favRef = doc(db, "favorites", `${userId}_${psychologistId}`);
      const favSnap = await getDoc(favRef);
      setIsFavorite(favSnap.exists());
    };

    checkFavorite();
  }, [userId, psychologistId]);

  const toggleFavorite = async () => {
    if (!userId) {
      alert("Please log in first!");
      return;
    }

    const favRef = doc(db, "favorites", `${userId}_${psychologistId}`);

    try {
      if (isFavorite) {
        await deleteDoc(favRef);
        setIsFavorite(false);
      } else {
        await setDoc(favRef, {
          userId,
          psychologistId,
        });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  return { isFavorite, toggleFavorite };
};

export default useFavoriteTherapists;
