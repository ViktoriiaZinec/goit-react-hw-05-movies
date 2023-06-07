import { MovieDetails } from './MovieDetails/MovieDetails';
import { Trending } from './Trending/Trending';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Trending />} />
      <Route path="/movie/:movie_id" element={<MovieDetails />} />
    </Routes>

    // <>
    //   <Trending />
    // </>
  );
};
