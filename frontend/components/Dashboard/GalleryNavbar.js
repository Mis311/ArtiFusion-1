// components/GalleryNavbar.js
import { Chip } from '@mui/material';

const GalleryNavbar = ({ onSelect }) => {
  const categories = ['All', 'Image', 'Stories', 'Manga & Visual Novel'];

  return (
    <div className="gallery-navbar">
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category}
          onClick={() => onSelect(category)}
          style={{ marginRight: '0.5rem', cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

export default GalleryNavbar;
