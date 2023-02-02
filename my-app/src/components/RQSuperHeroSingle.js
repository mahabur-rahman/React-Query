import React from "react";
import { useSuperHeroDetails } from "../hooks/useSuperHeroDetails";
import { useParams } from "react-router-dom";

const RQSuperHeroSingle = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroDetails(heroId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RQSuperHeroSingle;
