import React from 'react';
import IconButton from '@mui/material/IconButton';
import UploadIcon from '@mui/icons-material/Upload';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const UploadMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <Link href="/upload">
          <MenuItem onClick={handleClose}>Image</MenuItem>
        </Link>
        <Link href="/upload">
          <MenuItem onClick={handleClose}>Manga/Visual Novels</MenuItem>
        </Link>
        <Link href="/novel-upload">
          <MenuItem onClick={handleClose}>Stories</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default UploadMenu;
