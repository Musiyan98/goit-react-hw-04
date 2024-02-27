import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';

const ImageCard = ({ image: { urls, alt_description } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(urls);
  return (
    <div>
      <img src={urls.small} alt={alt_description} onClick={() => setModalIsOpen(true)} />
      {modalIsOpen && (
        <ImageModal
          onClose={() => setModalIsOpen(false)}
          isOpen={modalIsOpen}
          image={urls}
          alt={alt_description}
        />
      )}
    </div>
  );
};

export default ImageCard;
