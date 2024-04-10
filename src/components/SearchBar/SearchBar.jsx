import style from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';

const SearchBar = ({ handleQuery }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.currentTarget.elements.searchInput.value;
    handleQuery(value);
  }
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.searchBtn} type="submit">
          <FcSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
