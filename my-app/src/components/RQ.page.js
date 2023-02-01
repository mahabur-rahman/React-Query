import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

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

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    // {
    //   cacheTime: 5000,
    //   staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: true,
    //  }

    // {
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,

    // }

    // {
    //   enabled: false,
    // }

    { onSuccess, onError }
  );

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
        return <div key={ele.name}>{ele.name}</div>;
      })}
    </>
  );
};

export default RQ;
