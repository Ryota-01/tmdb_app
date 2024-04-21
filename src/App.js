import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";
import SearchMovie from "./pages/SearchMovie";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
        <Route path="/searchmovie" element={<SearchMovie />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
