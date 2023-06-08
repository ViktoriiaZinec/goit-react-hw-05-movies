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
// getMovies();

export const getMovieDetails = async movie_id => {
  // console.log(
  //   axios.defaults.baseURL +
  //     `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  // );
  const promise = axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  console.log(promise);
  return promise;
};
