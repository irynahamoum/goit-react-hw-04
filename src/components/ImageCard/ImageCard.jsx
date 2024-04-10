import style from './ImageCard.module.css';
const ImageCard = ({ imageData, handleModalOpen }) => {
  return (
    <li>
      <div className={style.card}>
        <img
          className={style.image}
          src={imageData.urls.small}
          alt={imageData.alt_description}
          onClick={() => {
            handleModalOpen(imageData.urls.regular);
          }}
        />
      </div>
    </li>
  );
};

export default ImageCard;
