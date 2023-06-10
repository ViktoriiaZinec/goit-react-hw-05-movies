import { Link } from 'react-router-dom';
import css from '../css/Styles.module.css';

export const MovieList = ({ movies, location }) => {
  if (movies.length > 0) {
    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <p className={css.error}>Sorry, there are no movies for your request</p>
    );
  }
};
