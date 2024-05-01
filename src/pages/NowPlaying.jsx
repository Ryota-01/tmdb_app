import React, { useEffect, useState } from "react";
import { Grid, Box, Pagination } from "@mui/material";
import axios from "axios";
import NavBar from "../components/NavBar";
import CardComponent from "../components/CardComponent";

export default function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setPages] = useState(1);
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
        `https://api.themoviedb.org/3/movie/now_playing?api_key=bf827a970c4e63f0fedbc1cc32967183&language=ja&page=${pages}`,
        options
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
        setPages(res.data.page);
        setTotalPages(res.data.total_pages);
        setTotalResults(res.data.total_results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pages]);

  return (
    <>
      <NavBar />
      <Box sx={{ margin: "32px 0", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          color="primary"
          page={pages}
          onChange={(e, page) => setPages(page)}
        />
      </Box>
      <Box>
        <CardComponent movies={movies.results} />
      </Box>
      <Box sx={{ margin: "32px 0", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          color="primary"
          page={pages}
          onChange={(e, page) => setPages(page)}
        />
      </Box>
    </>
  );
}
