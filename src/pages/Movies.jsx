import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  console.log(movies.results);
  const a =
    movies.results &&
    movies.results.map((b) => {
      return console.log(b);
    });
  console.log(a);
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
    <Grid container spacing={2}>
      {movies.results &&
        movies.results.map((movie) => (
          <Grid item md={3} sx={{ height: "600px" }}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                title="poster_image"
              />
              <CardContent>
                <Typography variant="body1">公開日：{movie.release_date}</Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>{movie.title}</Typography>
                <Typography variant="body2" color="text.secondary">{movie.overview}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
