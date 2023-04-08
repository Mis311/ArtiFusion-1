import React from 'react';
import IconButton from '@mui/material/IconButton';
import UploadIcon from '@mui/icons-material/Upload';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const UploadMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUploadOptionClick = () => {
 
    handleClose();
  };

  return (
    <>
      <IconButton color="primary" onClick={handleClick}>
        <UploadIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleUploadOptionClick('Image')}>
          Image
        </MenuItem>
        <MenuItem onClick={() => handleUploadOptionClick('Manga/Visual Novels')}>
          Manga/Visual Novels
        </MenuItem>
        <MenuItem onClick={() => handleUploadOptionClick('Stories')}>
          Stories
        </MenuItem>
      </Menu>
    </>
  );
};

export default UploadMenu;
