import { useState } from 'react';
import { useEffect } from 'react';
import { getMovieDetails, getMovies } from 'service/video-servise';
import { Link, useLocation } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  // useEffect(() => {
  //   getMovies().then(data => {
  //     console.log('my', data.data.result);
  //     setMovies(data.data.results);
  //   });
  // }, []);

  useEffect(() => {
    getMovies().then(data => {
      setMovies(data.data.results);
    });
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/ ${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesPage;
