import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.searchQuery.value.trim() === '') {
      toast.error('Oops, seem to have you entered anything');
      return;
    }

    onSearch(evt.target.elements.searchQuery.value);
    evt.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
