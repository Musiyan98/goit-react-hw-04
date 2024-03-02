import css from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.LoadMoreContainer}>
      <button className={css.LoadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
