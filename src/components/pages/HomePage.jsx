import { useState } from 'react';
import { useEffect } from 'react';
import { getMovies } from 'service/video-servise';
import { MovieList } from 'components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => {
      setMovies(data.data.results);
    });
  }, []);
  return <MovieList movies={movies} />;
};

export default MoviesPage;
