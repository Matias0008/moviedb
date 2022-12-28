import { Routes, Route } from "react-router-dom";
import { useWindowSize } from "./hooks/useWindowSize";

import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";

import { PopularMovies } from "./movies/components/PopularMovies";
import { Index } from "./index/components/Index";
import { TvDetail } from "./tv/tv-detail/components/TvDetail";
import { MovieDetail } from "./movies/movie-detail/components/MovieDetail";
import { NowPlayingMovies } from "./movies/components/NowPlayingMovies";
import { UpcomingMovies } from "./movies/components/UpcomingMovies";
import { Search } from "./search/components/Search";
import { Footer } from "@src/components/Footer";
import { TopRatedMovies } from "./movies/components/TopRatedMovies";
import { Box } from "@chakra-ui/react";
import { PopularTv } from "./tv/components/PopularTv";
import { TopRatedTv } from "./tv/components/TopRatedTv";

export const AppRouter = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width <= 768 ? <MobileNavbar /> : <Navbar />}
      <Box mt={"64px"}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="movie/popular" element={<PopularMovies />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movie/now-playing" element={<NowPlayingMovies />} />
          <Route path="movie/top-rated" element={<TopRatedMovies />} />
          <Route path="movie/upcoming" element={<UpcomingMovies />} />
          <Route path="tv/:id" element={<TvDetail />} />
          <Route path="tv/popular" element={<PopularTv />} />
          <Route path="tv/top-rated" element={<TopRatedTv />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};
