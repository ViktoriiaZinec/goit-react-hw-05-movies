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

const MoviesPage = ({ onChangeState }) => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(fetchStatus.Idle);
  const location = useLocation();
  // const stateRef = useRef(location);
  // console.log('stateRef :>> ', stateRef);
  // onChangeState(stateRef);

  // console.log('object :>> ', stateRef);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const fetchMovies = useCallback(async () => {
    if (!query) return;
    setStatus(fetchStatus.Loading);
    try {
      const movies = await getSearchingMovies(query);
      setMovies(movies.data.results);
      setStatus(fetchStatus.Success);
    } catch (err) {
      setStatus(fetchStatus.Error);
    }
  }, [query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleSearch = search => {
    if (!search.trim()) {
      return alert('Please type text');
    }
    setSearchParams({ query: search });
  };

  return (
    <>
      <Searching query={query} onSearch={handleSearch} />
      {status === fetchStatus.Loading && 'Loading, wait'}
      {status === fetchStatus.Error && 'Error fetching'}
      {status === fetchStatus.Success && (
        <MovieList movies={movies} location={location} />
      )}
    </>
  );
};

export default MoviesPage;
