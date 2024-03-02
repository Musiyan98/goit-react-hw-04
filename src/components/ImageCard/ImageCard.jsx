// import css from './ImageCard.module.css';
import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';

const ImageCard = ({ image: { urls, alt_description, description } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <img src={urls.small} alt={alt_description} onClick={() => setModalIsOpen(true)} />
      {modalIsOpen && (
        <ImageModal
          onClose={() => setModalIsOpen(false)}
          isOpen={modalIsOpen}
          image={urls}
          alt_description={alt_description}
          description={description}
        />
      )}
    </div>
  );
};

export default ImageCard;
