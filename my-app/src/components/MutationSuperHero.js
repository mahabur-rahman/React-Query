import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useMutateHeroes,
  useAddSuperHero,
  useAddSuperHeroData,
} from "../hooks/useMutateData";

const MutationSuperHero = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = ({ data }) => {
    console.log({ data });
  };

  const onError = ({ data }) => {
    console.log({ data });
  };

  const { isLoading, data, isError, error, refetch } = useMutateHeroes(
    onSuccess,
    onError
  );

  //   add heroes

  const { mutate: addHero } = useAddSuperHeroData();

  const addHeroes = () => {
    //  console.log({ name, alterEgo });
    const hero = { name, alterEgo };

    addHero(hero);
  };

  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      <h2>React Query Super Heroes Page</h2>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={addHeroes}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>

      {/* show get data from api */}
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/mutation/${hero.id}`}>
              {hero.id} - {hero.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MutationSuperHero;
