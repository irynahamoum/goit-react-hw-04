import ImageCard from '../ImageCard/ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, handleModalOpen }) => {
  console.log(images);
  return (
    <ul className={style.galleryContainer}>
      {images !== null &&
        images.map((image) => {
          return <ImageCard handleModalOpen={handleModalOpen} key={image.id} imageData={image} />;
        })}
    </ul>
  );
};

export default ImageGallery;
