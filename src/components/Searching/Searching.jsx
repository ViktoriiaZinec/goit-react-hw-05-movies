import { useState } from 'react';
// import { getSearchingMovies } from 'service/video-servise';
import { useSearchParams } from 'react-router-dom';

export const Searching = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [search, setSearch] = useState(query ?? '');

  const handleChange = event => {
    // console.log('event.target :>> ', event.target);
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    setSearchParams({ query: search });
    setSearch('');
  };

  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Type to search..."
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
