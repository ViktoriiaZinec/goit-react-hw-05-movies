import axios from 'axios';

// https://api.themoviedb.org/3/movie/157336?api_key=4a1172526f3e165e04bf3ca6cde313b8
// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';

const API_KEY = '4a1172526f3e165e04bf3ca6cde313b8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (page = 1) => {
  const promise = axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return promise;
};

export const getMovieDetails = async movie_id => {
  const promise = axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return promise;
};
export const getSearchingMovies = async query => {
  const promise = axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    // `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=4a1172526f3e165e04bf3ca6cde313b8`
  );

  return promise;
};

export const getCast = async movie_id => {
  const promise = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US&api_key=4a1172526f3e165e04bf3ca6cde313b8`
  );
  return promise;
};
