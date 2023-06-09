import { Link } from 'react-router-dom';

export const MovieList = (movies, location) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
