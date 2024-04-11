import Modal from 'react-modal';
import style from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ handleModalClose, modalData, isOpen }) => {
  return (
    <Modal overlayClassName={style.modalOpen} isOpen={isOpen} onRequestClose={handleModalClose} preventScroll={true}>
      <img className={style.modalImage} src={modalData} />
      <button className={style.closeBtn} onClick={handleModalClose}>
        ❌
      </button>
    </Modal>
  );
};

export default ImageModal;
