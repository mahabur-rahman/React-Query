import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const RQ = () => {
  const query = useQuery();
  console.log(query);

  //   const { isLoading, data } = useQuery("super-heroes", () => {
  //     return axios.get(`http://localhost:4000/superheroes`);
  //   });

  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h2>Rq super heroes data fetch</h2>

      {data?.data.map((ele) => {
        return <div key={ele.name}>{ele.name}</div>;
      })}
    </>
  );
};

export default RQ;
