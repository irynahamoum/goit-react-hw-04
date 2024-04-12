import style from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ handleQuery }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.currentTarget.elements.searchInput.value.trim();
    if (value === '') {
      toast.error('The search field is empty! Please type the value for search.', { position: 'top-right' });
      e.currentTarget.reset();
      return;
    }
    handleQuery(value);
  }

  return (
    <header className={style.header}>
      <Toaster />
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
