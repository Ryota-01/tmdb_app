import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import CardComponent from "../components/CardComponent";
import { Box, Divider, TextField, Typography } from "@mui/material";

export default function SearchMovie() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [inputElement, setInputElement] = useState("");
  const [message, setMessage] = useState(inputElement === "" && "");
  const onChange = (e) => {
    setInputElement(e.target.value);
    if (searchMovies.results.length === 0) {
      setMessage("検索ワードに一致する映画が見つかりません。");
    }
  };

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
        `https://api.themoviedb.org/3/search/movie?query=${inputElement}&include_adult=false&language=ja&page=1`,
        options
      )
      .then((res) => {
        console.log(res.data);
        setSearchMovies(res.data);
      })
      .catch((e) => {
        console.error(e);
        setMessage("エラーが発生しました。");
      });
  }, [inputElement]);

  const styles = {
    box: {
      sx: {
        width: { xs: "100%", md: "60%" },
        margin: "36px auto",
      },
    },
    input: {
      value: inputElement,
      onChange: onChange,
      placeholder: "検索ワードを入力してください",
    },
    message: {
      variant: "body1",
      textAlign: "center",
      color: "text.secondary",
      sx: { margin: "32px 0" },
    },
  };

  return (
    <>
      searchmovie
      <NavBar />
      <Box {...styles.box}>
        <TextField {...styles.input} fullWidth />
      </Box>
      <Divider />
      {searchMovies.results && searchMovies.results.length > 0 ? (
        <Box sx={{ marginTop: "32px" }}>
          <CardComponent movies={searchMovies.results} />
        </Box>
      ) : (
        <Typography {...styles.message}>{message}</Typography>
      )}
    </>
  );
}