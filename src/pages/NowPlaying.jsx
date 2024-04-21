import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import NavBar from "../components/NavBar";
import CardComponent from "../components/CardComponent";

export default function NowPlaying() {
  const [movies, setMovies] = useState([]);
  console.log();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjgyN2E5NzBjNGU2M2YwZmVkYmMxY2MzMjk2NzE4MyIsInN1YiI6IjY2MjM3NmNiMjU4ODIzMDE3ZDkwYWFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PuuRAUihBiEDGOW6TyzpUZI4IhrO7TYoNC4raFcwcoY",
      },
    };

    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=bf827a970c4e63f0fedbc1cc32967183&language=ja&page=1",
        options
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      nowplaying
      <NavBar />
      <Box>
        <CardComponent movies={movies.results} />
      </Box>
    </>
  );
}
