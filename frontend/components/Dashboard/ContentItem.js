import  { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/system';

//style for resolution when hovered
const ImgCover = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
const ContentItem =({ title, username, imageUrls, stories = [] }) => {
  const [hovered, setHovered] = useState(false);
 
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const images = imageUrls.map((url) => ({
    original: url,
    thumbnail: url,
  }));


  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: hovered
          ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))'
          : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="card-image"
        style={{
          position: 'relative',
          overflow: hovered && imageUrls.length > 1 ? 'visible' : 'hidden',
        }}
      >
        {hovered && imageUrls.length > 1 ? (
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            autoPlay={true}
            slideInterval={2000}
          />
        ) : (
          <figure className="image is-4by3">
            <ImgCover src={imageUrls[0]} alt={title}  />
          </figure>
        )}
        {hovered && (
          <div
            style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            {stories} 
            {title}
          
          </div>
        )}
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
          </div>
          <div className="media-content" style={{ overflow: 'hidden' }}>
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">by {username}</p>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 70,
            right: 10,
          }}
        >
          <Stack direction="row" spacing={0}>
            <IconButton color="primary" aria-label="like" size="small">
              <FavoriteIcon fontSize="small" />
            </IconButton>
            <IconButton color="primary" aria-label="comment" size="small">
              <CommentIcon fontSize="small" />
            </IconButton>
            <IconButton color="primary" aria-label="share" size="small">
              <ShareIcon fontSize="small" />
            </IconButton>
          </Stack>
        </div>
      
      </div>
    </div>
  );
};

export default ContentItem;
