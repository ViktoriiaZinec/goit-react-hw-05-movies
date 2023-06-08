import HomePage from 'components/pages/HomePage';
import { Layout } from './Layout/Layout';
import MovieDetailsPage from 'components/pages/MovieDetailsPage';

import { Route, Routes } from 'react-router-dom';
import MoviesPage from 'components/pages/MoviesPage';

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route index element={<HomePage />} /> */}
      <Route path="/" element={<MoviesPage />} />
      <Route path="movie/:movie_id" element={<MovieDetailsPage />} />
      {/* </Route> */}
    </Routes>

    // <>
    //   <Trending />
    // </>
  );
};
