const API_KEY = "593c969ee46e0cf162ead27bac1994d1";
const language = "language=es-ES";

// Manejo de la api, todo lo que se trabaja con ella se encuentra aca

export const api = {
  API_KEY,
  links: {
    images: {
      backdrop: "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces",
      poster: "https://image.tmdb.org/t/p/w500",
    },
    requests: {
      Enstreaming: `https://api.themoviedb.org/3/trending/tv/week?api_key=593c969ee46e0cf162ead27bac1994d1&language=es-ES`,
      Entelevision: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&${language}`,
      Enalquiler: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&${language}&with_watch_monetization_types=rent`,
      Encines: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&${language}&with_release_type=3|2`,
      TopRatedPeliculas: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&${language}`,
      TopRatedPeliculasWithNumPage: (numPage) =>
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&${language}&page=${numPage}`,
      TopRatedTelevision: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&${language}`,
      TrendingHoy: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&${language}`,
      TrendingEstasemana: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&${language}`,
      getTopRatedTv: (numPage) =>
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&${language}&page=${numPage}`,
      getPopularTv: (numPage) =>
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&${language}&page=${numPage}`,
      getOneTv: (id) =>
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&${language}`,
      getOneMovie: (id) =>
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&${language}`,
      tvCredits: (id) =>
        `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${API_KEY}&${language}`,
      movieCredits: (id) =>
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=es-ES`,
      keywords: (id, type) =>
        `https://api.themoviedb.org/3/${type}/${id}/keywords?api_key=${API_KEY}`,
      getMostPopularMovies: (page_num, sort) =>
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&${language}&sort_by=${sort}&include_adult=false&include_video=false&page=${page_num}&with_watch_monetization_types=flatrate`,
      getRecommendations: (id, type) =>
        `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&${language}`,
      nowPlayingMovies: (page_num) =>
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&${language}&page=${page_num}&region=DE&release_date.gte=2022-16-12&release_date.lte=2022-28-12`,
      upcomingMovies: (page_num) =>
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&${language}&page=${page_num}&region=US`,
      search: (query) =>
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&${language}&region=US&query=${query}&page=1&include_adult=false`,
    },
  },
};

// Este diccionario es para hacer un mapeo para determinar el tipo (pelicula o tv) de un link seleccionado, ya que en algunas peticiones no tenemos el dato del tipo de la misma.

export const defineType = {
  TopRatedPeliculas: "movie",
  TopRatedTelevision: "tv",
  Enstreaming: "tv",
  Enalquiler: "movie",
  Encines: "movie",
  Entelevision: "tv",
};
