import axios from 'axios';

// https://api.themoviedb.org/3/movie/157336?api_key=4a1172526f3e165e04bf3ca6cde313b8
// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';

const API_KEY = '4a1172526f3e165e04bf3ca6cde313b8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (page = 1) => {
  const response = axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );

  return response;
};

export const getMovieDetails = async movie_id => {
  const response = axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
export const getSearchingMovies = async query => {
  const response = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return response;
};

export const getCast = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}/credits?language=en-US&api_key=${API_KEY}`
  );

  return response;
};

export const getReviews = async movie_id => {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );

  return response;
};
