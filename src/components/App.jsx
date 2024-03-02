import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import fetchImages from './API/API.js';
import SearchBar from './SearchBar/SearchBar.jsx';
import Loader from './Loader/Loader.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import Notification from './Notification/Notification.jsx';
import ErrorMessage from './ErrorMessage/ErrorMessage.jsx';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  // const searchImages = async newQuery => {
  //   console.log(newQuery);
  // };

  const searchImages = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    console.log(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query.split('/')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedData.results]);
        console.log(fetchedData.total_pages);
        setTotalPage(fetchedData.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {images.length > 0 && !loading && totalPage !== page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {images.length === 0 && query !== '' && !error && !loading && <Notification />}
      <Toaster position="bottom-center" />
    </>
  );
};

export default App;

//
