import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, handleModalOpen }) => {
  console.log(images);
  return (
    <ul>
      {images !== null &&
        images.map((image) => {
          return <ImageCard handleModalOpen={handleModalOpen} key={image.id} imageData={image} />;
        })}
    </ul>
  );
};

export default ImageGallery;
