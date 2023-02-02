import { useSuperHeroesData } from "../hooks/useSuperHeroData";
import { Link } from "react-router-dom";

const RQ = () => {
  // const query = useQuery();
  // console.log(query);

  //   const { isLoading, data } = useQuery("super-heroes", () => {
  //     return axios.get(`http://localhost:4000/superheroes`);
  //   });

  const onSuccess = (data) => {
    console.log(`success message after data fetching `, data);
  };

  const onError = (error) => {
    console.log(`error message after data fetching `, error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);
  // console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h1>Loading..</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h2>Rq super heroes data fetch</h2>

      <button onClick={refetch}>Fetch Heroes</button>

      {data?.data.map((ele) => {
        return (
          <>
            <br />
            <Link to={`/rq-heroes/${ele.id}`} key={ele.id}>
              {ele.name}
            </Link>
            <br />
          </>
        );
      })}

      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};

export default RQ;
