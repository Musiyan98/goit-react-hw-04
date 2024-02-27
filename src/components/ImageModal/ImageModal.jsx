import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image, alt_description }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{alt_description}</h2>
        <button onClick={onClose}>close</button>
        <div>
          <img width="200px" src={image.regular} alt={alt_description} />
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
