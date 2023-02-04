import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superHeroes/${heroId}`);
};

const DynamicParallel = ({ heroIds }) => {
  const results = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );

  return <></>;
};

export default DynamicParallel;
