import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`http://localhost:4000/friends`);
};

const Parallel = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);

  console.log(superHeroes, friends);

  return <h1>Parallel</h1>;
};

export default Parallel;
