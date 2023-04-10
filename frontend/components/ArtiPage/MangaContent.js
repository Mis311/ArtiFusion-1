

const MangaContent = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Manga page ${index + 1}`} />
      ))}
    </div>
  );
};

export default MangaContent;
