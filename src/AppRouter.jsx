import { Routes, Route } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";

import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";

import { Movies } from "./movies/components/Movies";
import { Index } from "./index/components/Index";
import { TvDetail } from "./tv/tv-detail/components/TvDetail";
import { MovieDetail } from "./movies/movie-detail/components/MovieDetail";

export const AppRouter = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width <= 768 ? <MobileNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="movie" element={<Movies />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="tv/:id" element={<TvDetail />} />
      </Routes>
    </>
  );
};
