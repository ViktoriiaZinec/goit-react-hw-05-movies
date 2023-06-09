import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Searching } from 'components/Searching/Searching';
import { getSearchingMovies } from 'service/video-servise';
import { MovieList } from 'components/MovieList/MovieList';

const fetchStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
};

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(fetchStatus.Idle);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  const fetchMovies = useCallback(async () => {
    // console.log('search :>> ', search);
    if (!search) return;
    // console.log('fetchStatus.Loading :>> ', fetchStatus.Loading);
    setStatus(fetchStatus.Loading);
    try {
      const movies = await getSearchingMovies(search);
      console.log('movieResponse :>> ', movies.data.results);
      setMovies(movies.data.results);
      setStatus(fetchStatus.Success);
    } catch (err) {
      setStatus(fetchStatus.Error);
    }
  }, [search]);

  useEffect(() => {
    // console.log('fetch', fetchMovies());
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <Searching />
      {search && movies.length ? MovieList(movies, location) : null}
    </div>
  );
};

export default MoviesPage;
