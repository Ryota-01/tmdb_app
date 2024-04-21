import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ margin: "24px 0" }}>
      <ul>
        <Link to="/home">
          <li>home</li>
        </Link>
        <Link to="/nowplaying">
          <li>nowplaying</li>
        </Link>
        <Link to="/searchmovie">
          <li>searchmovie</li>
        </Link>
      </ul>
    </Box>
  );
}
