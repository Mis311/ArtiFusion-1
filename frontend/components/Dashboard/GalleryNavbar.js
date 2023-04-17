// components/GalleryNavbar.js
import { Chip } from '@mui/material';

const GalleryNavbar = ({ onSelect }) => {
  const categories = ['All', 'Manga & Visual Novel','Image', 'Stories' ];

  return (
    <div className="gallery-navbar">
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category}
          onClick={() => onSelect(category)}
          size="large"
          style={{ margin: '0 1rem 0.5rem 0', cursor: 'pointer', fontSize: '1rem',  padding: '1.5rem'}}
        />
      ))}
    </div>
  );
};

export default GalleryNavbar;
