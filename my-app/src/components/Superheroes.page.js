import React, { useState, useEffect } from "react";
import axios from "axios";

const Superheroes = () => {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  //   data fetch from db.json
  useEffect(() => {
    axios
      .get(`http://localhost:4000/superheroes`)
      .then((res) => {
        setInfo(res.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErr(err.message);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>{err}</h1>;
  }

  return (
    <>
      <h1>Super Heroes Traditional Data Fetch</h1>

      {info.map((hero) => {
        return (
          <>
            <div key={Math.random()}>{hero.name}</div>
          </>
        );
      })}
    </>
  );
};

export default Superheroes;
