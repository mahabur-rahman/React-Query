import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSingleMutate";

const MutationSinlgeSuperHero = () => {
  const { id } = useParams();

  const { isLoading, data, isError, error } = useSuperHeroData(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <div>
        {data.data.name} - {data.data.alterEgo}
      </div>
    </div>
  );
};

export default MutationSinlgeSuperHero;
