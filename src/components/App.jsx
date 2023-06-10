import { lazy } from 'react';
import HomePage from 'components/pages/HomePage';
import { Layout } from './Layout/Layout';

import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
const MoviesPage = lazy(() => import('components/pages/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('components/pages/MovieDetailsPage')
);

// import MovieDetailsPage from 'components/pages/MovieDetailsPage';
const ReviewsPage = lazy(() => import('components/pages/ReviewsPage'));
const CastPage = lazy(() => import('components/pages/CastPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviesPage />} />
          <Route path=":movie_id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
