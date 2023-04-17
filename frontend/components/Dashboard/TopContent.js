import { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { styled } from '@mui/system';

const ImgCover = styled('img')({
  objectFit: 'none',
  width: '100%',
  height: '100%',
});
const TopContentWrapper = styled('div')({
  position: 'relative',
  height: '400px',
});

const TopContent = ({ imageUrls = [] }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <TopContentWrapper>
      <div
        className="top-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: hovered
            ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))'
            : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)',
          transition: 'all 0.3s ease',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <figure style={{ margin: '0' }}>
          <ImgCover src={imageUrls[0]} alt="Top Content" />
        </figure>
        {hovered && (
          <div
            className="top-content-description"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              padding: '1rem',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              textAlign: 'center',
              margin: '0 10px',
            }}
          >
            <div>Top Content Title</div>
            <div>Top Content Category</div>
            <div>
              <button className="button is-primary">Read More</button>
            </div>
          </div>
        )}
      </div>
    </TopContentWrapper>
  );
};

export default TopContent;
