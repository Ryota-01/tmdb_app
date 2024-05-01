import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function NavBar() {
  const location = useLocation();
  const [title, setTitle] = useState("HOME");

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/nowplaying") {
      setTitle("公開中");
    } else if (pathname === "/searchmovie") {
      setTitle("映画検索");
    }
  }, [location.pathname]);

  return (
    <Box>
      <Typography variant="h5" padding="14px 0">
        {title}
      </Typography>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/nowplaying">
          <li>公開中</li>
        </Link>
        <Link to="/searchmovie">
          <li>映画検索</li>
        </Link>
      </ul>
    </Box>
  );
}
