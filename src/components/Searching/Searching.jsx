import { useState } from 'react';
// import { getSearchingMovies } from 'service/video-servise';
import { useSearchParams } from 'react-router-dom';
import css from './Searching.module.css';

export const Searching = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [search, setSearch] = useState(query ?? '');

  const handleChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = () => {
    if (!search.trim()) {
      return alert('Please type text');
    }
    setSearchParams({ query: search });
    setSearch('');
  };

  return (
    <div className={css.form_control}>
      <input
        value={search}
        onChange={handleChange}
        type="text"
        className={css.search_form_input}
        placeholder="Type to search..."
      />
      <button
        className={css.search_form_button}
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
};
