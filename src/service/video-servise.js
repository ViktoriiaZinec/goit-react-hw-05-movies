import axios from 'axios';

// https://api.themoviedb.org/3/movie/157336?api_key=4a1172526f3e165e04bf3ca6cde313b8

// const API = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   params: {
//     key: '4a1172526f3e165e04bf3ca6cde313b8',
//   },
// });

// const API_KEY = '4a1172526f3e165e04bf3ca6cde313b8';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.headers.common['Authorization'] = API_KEY;

// export async function getTrending(page = 1) {
//   return await API.get('', 'trending/all/day?language=en-US').then(response => {
//     console.log('response.data :>> ', response);
//   });
// }

// https://api.themoviedb.org/3/movie/550?api_key=e744dd987f832ad945563dbad49387aa

const API_KEY = '4a1172526f3e165e04bf3ca6cde313b8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );
  console.log(res.data.results);
  return res.data.results;
};
getMovies();
