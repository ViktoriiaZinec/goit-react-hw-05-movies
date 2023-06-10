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

  const [searchParams] = useSearchParams();
  const search = searchParams.get('query');

  const fetchMovies = useCallback(async () => {
    if (!search) return;
    setStatus(fetchStatus.Loading);
    try {
      const movies = await getSearchingMovies(search);
      setMovies(movies.data.results);
      setStatus(fetchStatus.Success);
    } catch (err) {
      setStatus(fetchStatus.Error);
    }
  }, [search]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <Searching />
      {status === fetchStatus.Loading && 'Loading, wait'}
      {status === fetchStatus.Error && 'Error fetching'}
      {status === fetchStatus.Success && MovieList(movies, location)}
    </div>
  );
};

export default MoviesPage;
