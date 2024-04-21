import React from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import FormattedDate from "../hooks/FormattedDate";

export default function Detail() {
  const location = useLocation("");
  const movie = location.state.movie;
  const styles = (variant, fontWeight) => ({
    typography: {
      variant: variant,
      fontWeight: fontWeight,
      color: "text.secondary",
      gutterBottom: "gutterBottom",
    },
  });

  return (
    <>
      Detail
      <NavBar />
      <Grid container columnSpacing={3}>
        <Grid item sm={4} md={3}>
          <Box width="100%">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              width="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={9} justifyContent="flex-start">
          <Typography {...styles("h5", "bold").typography}>
            『{movie.title}』
          </Typography>
          <Typography {...styles("body2", "bold").typography}>
            original title：{movie.original_title}
          </Typography>
          <Typography {...styles("body2").typography}>
            公開日：{FormattedDate(movie.release_date)}
          </Typography>
          <Typography {...styles("body2").typography} gutterBottom>
            {movie.original_language === "ja" ? (
              <Chip color="secondary" size="small" label="邦画" />
            ) : (
              <Chip color="primary" size="small" label="洋画" />
            )}
          </Typography>

          <Divider sx={{ margin: "16px 0" }} />
          <Typography {...styles("body2").typography}>
            {movie.overview !== "" ? (
              <>{movie.overview}</>
            ) : (
              <>概要が登録されていません。</>
            )}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
