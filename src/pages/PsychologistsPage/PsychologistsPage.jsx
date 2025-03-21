import { useEffect } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import { fetchPsychologists } from "../../redux/сatalog/operations";
import { useDispatch, useSelector } from "react-redux";

import { selectCatalog } from "../../redux/сatalog/selectors";

const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const psychologists = useSelector(selectCatalog) || [];

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);
  return (
    <div className="container-width container-px pt-23 md:pt-30 lg:pt-40 pb-10 lg:pb-[100px]">
      <CatalogList
        fetchApi={() => dispatch(fetchPsychologists())}
        catalog={psychologists}
      />
    </div>
  );
};

export default PsychologistsPage;
