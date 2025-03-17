// hooks/useFetchFavorites.js
import { useEffect, useState } from "react";
import { db } from "../service/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const useFetchFavorites = (userId) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchFavorites = async () => {
      try {
        const favCollection = collection(db, "favorites");
        const favQuery = query(favCollection, where("userId", "==", userId));
        const snapshot = await getDocs(favQuery);
        const favData = snapshot.docs.map((doc) => doc.data().psychologistId);

        setFavorites(favData);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userId]);

  return { favorites, loading };
};

export default useFetchFavorites;
