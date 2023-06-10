import { useState } from 'react';
import { useEffect } from 'react';
import { getMovies } from 'service/video-servise';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies().then(data => {
      setMovies(data.data.results);
    });
  }, []);
  return <MovieList movies={movies} location={location} />;
};

export default MoviesPage;
