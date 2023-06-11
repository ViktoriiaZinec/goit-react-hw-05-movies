import { useState } from 'react';
import css from './Searching.module.css';

export const Searching = ({ query, onSearch }) => {
  const [search, setSearch] = useState(query ?? '');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
    // console.log('value :>> ', value);
  };

  const handleSubmit = () => {
    onSearch(search);
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
