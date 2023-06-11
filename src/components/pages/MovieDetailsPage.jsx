import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/video-servise';
import css from '../css/Styles.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movie_id } = useParams();
  const location = useLocation();
  console.log('location.details :>> ', location);
  const defaultImg =
    'https://flutter-examples.com/wp-content/uploads/2022/03/image_not_found.png';

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
      <Link className={css.link_back} to={location.state?.from ?? '/'}>
        Go back
      </Link>
      <div className={css.container_movie}>
        <div className={css.img_descr}>
          <img
            src={
              movie.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                : defaultImg
            }
            alt={movie.title}
            width="200"
            height="300"
          ></img>
          <div className={css.movie_descr}>
            <h1>{movie.title}</h1>
            <p>User Score: {movie.vote_average} %</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>
              {movie.genres.map(el => {
                return el.name;
              })}
            </p>
          </div>
        </div>
        <p>Additional Information:</p>
        <ul className={css.cast_rew_list}>
          <li>
            <Link
              state={location.state}
              className={css.cast_rew_link}
              to={'cast'}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              state={location.state}
              className={css.cast_rew_link}
              to={`reviews`}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
