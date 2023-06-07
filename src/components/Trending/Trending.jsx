import { useState } from 'react';
import { useEffect } from 'react';
import { getMovies } from 'service/video-servise';
import { Link } from 'react-router-dom';

export const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => {
      //   console.log(data);
      setMovies(data.data.results);
    });
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={'/movie/' + movie.id}>{movie.title}</Link>
          {/* <a href="/trending/">{movie.title}</a> */}
        </li>
      ))}
    </ul>
  );
};
