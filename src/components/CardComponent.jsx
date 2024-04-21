import React from "react";
import {
  Box,
  Button,
  Card,
  Chip,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormattedDate from "../hooks/FormattedDate";

export default function CardComponent(props) {
  const { movies } = props;
  const navigate = useNavigate();
  const handleClick = (movie) => {
    navigate(`/detail/${movie.id}`, { state: { movie: movie } });
  };
  const styles = {
    card: {
      sx: {
        height: "440px",
        position: "relative",
      },
    },
    cardMedia: {
      component: "img",
      title: "poster_image",
      sx: {
        height: "240px",
        objectFit: "cover",
      },
    },
    typography: {
      color: "text.secondary",
      gutterBottom: "gutterBottom",
    },
    title: {
      variant: "h6",
      color: "text.secondary",
      gutterBottom: "gutterBottom",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    overview: {
      variant: "body2",
      color: "text.secondary",
      gutterBottom: "gutterBottom",
      sx: {
        overflow: "hidden",
        display: "-webkit-box" /* 必須 */,
        WebkitBoxOrient: "vertical" /* 必須 */,
        WebkitLineClamp: 2 /* 行数を制限 */,
      },
    },
  };

  return (
    <>
      <Grid container spacing={3}>
        {movies && movies ? (
          <>
            {movies.map((movie) => (
              <Grid item xs={12} sm={6} md={3}>
                <Card {...styles.card}>
                  <CardMedia
                    image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    {...styles.cardMedia}
                  />
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="caption" {...styles.typography}>
                        公開日：{FormattedDate(movie.release_date)}
                      </Typography>
                      <Typography variant="body2" {...styles.typography}>
                        {movie.original_language === "ja" ? (
                          <Chip color="secondary" label="邦画" size="small" />
                        ) : (
                          <Chip color="primary" size="small" label="洋画" />
                        )}
                      </Typography>
                    </Stack>
                    <Typography {...styles.title}>『{movie.title}』</Typography>
                    <Box sx={{ height: "60px" }}>
                      <Typography {...styles.overview}>
                        {movie.overview}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ position: "absolute", bottom: 0 }}>
                    <Button size="small" onClick={() => handleClick(movie)}>
                      show
                    </Button>
                    <Button size="small">shere</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </>
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}
