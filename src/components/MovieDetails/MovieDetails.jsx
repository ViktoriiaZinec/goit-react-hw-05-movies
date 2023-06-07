import { getMovieDetails } from '../../service/video-servise';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movie_id } = useParams();

  useEffect(() => {
    console.log('id', movie_id);
    if (typeof movie_id === 'undefined') return;
    getMovieDetails(movie_id).then(data => {
      console.log(data.data);
      setMovie(data.data);
    });
  }, [movie_id]);

  if (!('id' in movie)) return null;
  return (
    <>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          alt=""
          width="200"
          height="300"
        ></img>
        ;<h1>{}</h1>
        <h2>Overview</h2>
        <p>User Score: {movie.vote_average} %</p>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>
          {movie.genres.map(el => {
            console.log(el);
            return el.name;
          })}
        </p>
        <p>Additional Information:</p>
        <ul>
          <li>
            <Link to={/movie/}>Cast</Link>
          </li>
          <li>
            <Link to={/movie/}>Reviews</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
