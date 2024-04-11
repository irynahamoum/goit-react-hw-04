import style from './LoadMore.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
