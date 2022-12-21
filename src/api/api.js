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
      "En streaming": `https://api.themoviedb.org/3/trending/tv/week?api_key=593c969ee46e0cf162ead27bac1994d1&language=es-ES`,
      "En television": `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&${language}`,
      "En alquiler": `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&${language}&with_watch_monetization_types=rent`,
      "En cines": `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&${language}&with_release_type=3|2`,
      TopRatedPeliculas: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&${language}`,
      TopRatedTelevision: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&${language}`,
      getOneTv: (id) =>
        `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&${language}`,
      getOneMovie: (id) =>
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&${language}`,
      tvCredits: (id) =>
        `https://api.themoviedb.org/3/tv/${id}/aggregate_credits?api_key=${API_KEY}&${language}`,
      movieCredits: (id) =>
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&${language}`,
      keywords: (id, type) =>
        `https://api.themoviedb.org/3/${type}/${id}/keywords?api_key=${API_KEY}`,
    },
  },
};

// Este diccionario es para hacer un mapeo para determinar el tipo (pelicula o tv) de un link seleccionado, ya que en algunas peticiones no tenemos el dato del tipo de la misma.

export const defineType = {
  TopRatedPeliculas: "movie",
  TopRatedTelevision: "tv",
  "En streaming": "tv",
  "En alquiler": "movie",
  "En cines": "movie",
  "En television": "tv",
};
