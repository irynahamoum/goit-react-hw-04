import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Gallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, modalData: null });

  function handleSetQuery(value) {
    setQuery(value);
    setPage(1);
  }

  function handleLoadMoreBtn() {
    setPage((prevPage) => {
      return prevPage + 1;
    });
  }

  function handleModalOpen(image) {
    setModal({ isOpen: true, modalData: image });
  }

  function handleModalClose() {
    setModal({ isOpen: false, modalData: null });
  }

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);

        const { data } = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query,
            page,
            client_id: '4W5wwCV3VnKg3Zde4MDDTqRxHspQmcEchk9PcjgFG7k',
            per_page: 12,
          },
        });
        setGallery((prevGallery) => (page === 1 ? data.results : [...prevGallery, ...data.results]));
        setShowBtn(data.total_pages > page);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  return (
    <>
      <SearchBar handleQuery={handleSetQuery} />
      {error && <ErrorMessage />}
      {gallery !== null && gallery.length === 0 && (
        <p>
          Sorry, there was nothing found with your request &quot;<code>{query}</code>&quot;
        </p>
      )}
      <Gallery images={gallery} handleModalOpen={handleModalOpen} />
      {loading && <Loader />}
      {showBtn && <LoadMoreBtn onClick={handleLoadMoreBtn} />}
      {showBtn === false && gallery !== null && <p>There are no more pictures to be shown, SORRY 😢</p>}
      <ImageModal handleModalClose={handleModalClose} modalData={modal.modalData} isOpen={modal.isOpen} />
    </>
  );
}

export default App;
