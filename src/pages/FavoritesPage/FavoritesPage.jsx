import { useCallback } from "react";
import { useAuth } from "../../hooks/useAuth.jsx";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import { fetchFavoritesForUser } from "../../service/FetchService.js";

const FavoritesPage = () => {
  const { user } = useAuth();
  const fetchApi = useCallback(() => fetchFavoritesForUser(user?.uid), [user]);

  return (
    <div className="container-width container-px pt-23 md:pt-30 lg:pt-40 pb-10 lg:pb-[100px]">
      <CatalogList fetchApi={fetchApi} />
    </div>
  );
};

export default FavoritesPage;
