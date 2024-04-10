import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ handleModalClose, modalData, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      // style={customStyles}
    >
      <img src={modalData} />
    </Modal>
  );
};

export default ImageModal;
