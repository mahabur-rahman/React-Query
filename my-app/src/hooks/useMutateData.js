import { useMutation, useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get(`http://localhost:4000/superHeroes`);
};

export const useMutateHeroes = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
  });
};

// add hero to db.json
const addSuperHero = (hero) => {
  return axios.post(`http://localhost:4000/superHeroes`, hero);
};

export const useAddSuperHeroData = () => {
  return useMutation(addSuperHero);
};
