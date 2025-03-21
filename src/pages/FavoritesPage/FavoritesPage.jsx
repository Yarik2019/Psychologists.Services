import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import { fetchFavoritesForUser } from "../../redux/сatalog/operations";
import { useDispatch, useSelector } from "react-redux";

import { selectFavorites } from "../../redux/сatalog/selectors";
import { selectUser } from "../../redux/auth/selectors.js";
import { useEffect } from "react";
const FavoritesPage = () => {
  const dispatch = useDispatch();

  const userAuth = useSelector(selectUser);
  const favorites = useSelector(selectFavorites) || [];
  console.log(userAuth?.uid);
  useEffect(() => {
    if (userAuth?.uid) {
      dispatch(fetchFavoritesForUser({ userId: userAuth?.uid }));
    }
  }, [dispatch, userAuth]);

  // const fetchApi = useCallback(() => fetchFavoritesForUser(user?.uid), [user]);

  return (
    <div className="container-width container-px pt-23 md:pt-30 lg:pt-40 pb-10 lg:pb-[100px]">
      <CatalogList
        fetchApi={() =>
          dispatch(fetchFavoritesForUser({ userId: userAuth?.uid }))
        }
        catalog={favorites}
      />
    </div>
  );
};

export default FavoritesPage;
