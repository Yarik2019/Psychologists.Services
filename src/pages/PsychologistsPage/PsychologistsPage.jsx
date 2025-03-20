import { useCallback } from "react";
import CatalogList from "../../components/CatalogList/CatalogList";
import { fetchPsychologists } from "../../service/FetchService";

const PsychologistsPage = () => {
  const fetchApi = useCallback(fetchPsychologists, []);
  return (
    <div className="container-width container-px pt-23 md:pt-30 lg:pt-40 pb-10 lg:pb-[100px]">
      <CatalogList fetchApi={fetchApi} />
    </div>
  );
};

export default PsychologistsPage;
