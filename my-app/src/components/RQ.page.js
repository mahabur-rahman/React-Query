import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const RQ = () => {
  //   const { isLoading, data } = useQuery("super-heroes", () => {
  //     return axios.get(`http://localhost:4000/superheroes`);
  //   });

  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  console.log(data);

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
