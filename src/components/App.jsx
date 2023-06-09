import HomePage from 'components/pages/HomePage';
import { Layout } from './Layout/Layout';
import MovieDetailsPage from 'components/pages/MovieDetailsPage';
import CastPage from 'components/pages/CastPage';
import { Route, Routes } from 'react-router-dom';
import MoviesPage from 'components/pages/MoviesPage';
import ReviewsPage from './pages/ReviewsPage';
import NotFoundPage from './pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movie/:movie_id" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="/movies" element={<MoviesPage />} />
      </Route>
      <Route pat="*" element={<NotFoundPage />} />
    </Routes>
  );
};
