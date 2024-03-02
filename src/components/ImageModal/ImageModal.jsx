import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { IoMdCloseCircle } from 'react-icons/io';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image, alt_description, description }) => {
  console.log(alt_description);
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        contentLabel="Example Modal"
      >
        <button onClick={onClose} className={css.closeBtn}>
          <IoMdCloseCircle className={css.closeBtnIcon} />
        </button>
        <div>
          <img className={css.image} src={image.regular} alt={alt_description} />
          <p className={css.modalDescription}>{description} </p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
