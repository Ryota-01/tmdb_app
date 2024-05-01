import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import CardComponent from "../components/CardComponent";
import { Box, Divider, Pagination, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SearchMovie() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [inputElement, setInputElement] = useState("");
  const [message, setMessage] = useState(inputElement === "" && "");
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setPages] = useState(1);
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
        `https://api.themoviedb.org/3/search/movie?query=${inputElement}&include_adult=false&language=ja&page=${pages}`,
        options
      )
      .then((res) => {
        console.log(res.data);
        setSearchMovies(res.data);
        setPages(res.data.page);
        setTotalPages(res.data.total_pages);
        setTotalResults(res.data.total_results);
      })
      .catch((e) => {
        console.error(e);
        setMessage("エラーが発生しました。");
      });
  }, [inputElement, pages]);

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
        <>
          <Box sx={{ marginTop: "32px" }}>
            <Typography  {...styles.message}>{totalResults}件の映画情報がヒットしました</Typography>
          </Box>
          <Box sx={{ marginTop: "32px", display: "flex", justifyContent: "center" }}>
            <Pagination count={totalPages} color="primary" page={pages} onChange={(e, page) => setPages(page)} />
          </Box>
          <Box sx={{ marginTop: "32px" }}>
            <CardComponent movies={searchMovies.results} />
          </Box>
          <Box sx={{ marginTop: "32px", display: "flex", justifyContent: "center" }}>
            <Pagination count={totalPages} color="primary" page={pages} onChange={(e, page) => setPages(page)} />
          </Box>
        </>
      ) : (
        <Typography {...styles.message}>{message}</Typography>
      )}
    </>
  );
}
