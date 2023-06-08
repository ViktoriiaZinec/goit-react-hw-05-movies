import { useState } from 'react';
import { useEffect } from 'react';
import { getMovieDetails } from 'service/video-servise';
import { Link, useLocation } from 'react-router-dom';

export const Trending = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovieDetails().then(data => {
      //   console.log(data);
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
