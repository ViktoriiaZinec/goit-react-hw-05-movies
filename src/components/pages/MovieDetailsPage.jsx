import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/video-servise';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movie_id } = useParams();
  const location = useLocation();
  const defaultImg =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fru%2Fimage-vector%2Fimage-not-found-grayscale-photo-1737334631&psig=AOvVaw1-GJGIxYTff8RxRUivH4YC&ust=1686308950647000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCp-8HEs_8CFQAAAAAdAAAAABAE';

  useEffect(() => {
    if (!movie_id) return;
    const getMovie = async () => {
      const data = await getMovieDetails(movie_id);
      setMovie(data.data);
    };
    getMovie();
  }, [movie_id]);

  if (!('id' in movie)) return null;
  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <div>
        <img
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : defaultImg
          }
          alt=""
          width="200"
          height="300"
        ></img>
        <h2>Overview</h2>
        <p>User Score: {movie.vote_average} %</p>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <p>
          {movie.genres.map(el => {
            return el.name;
          })}
        </p>
        <p>Additional Information:</p>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
