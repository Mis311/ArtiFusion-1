import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import getNameServer from '../../utils/getNameServer';

const MangaUpload = ({ nToken }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [coverImage, setCoverImage] = useState('');
  const [contentImages, setContentImages] = useState([]);
  const [fanArtEnabled, setFanArtEnabled] = useState(false);
  const [collaborationEnabled, setCollaborationEnabled] = useState(false);

  // Handle input changes

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTagsChange = (event) => {
    const newTags = event.target.value.split(',');
    setTags(newTags);
  };

  const handleCoverImageChange = (event) => {
    // Similar to handleImageChange function in NewArtworkUpload
  };

  const handleContentImagesChange = (event) => {
    // Similar to handleImageChange function in NewArtworkUpload but for multiple images
  };

  const handleFanArtEnabledChange = (event) => {
    setFanArtEnabled(event.target.checked);
  };

  const handleCollaborationEnabledChange = (event) => {
    setCollaborationEnabled(event.target.checked);
  };

  const handleSubmit = async (ctx) => {
    // Submit new Manga/Visual Novel
  };

  return (
    <div>
      <h1 className="title is-1">New Manga/Visual Novel Upload</h1>
      <form>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextField
          label="Tags"
          fullWidth
          variant="outlined"
          margin="normal"
          helperText="Separate tags with commas"
          value={tags.join(',')}
          onChange={handleTagsChange}
        />
        <div className="field">
          <div className="file is-boxed">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
              />
              <span className="file-cta">
                <span className="file-label">Choose a cover image...</span>
              </span>
            </label>
          </div>
        </div>
        {coverImage && <img src={coverImage} alt="Cover" />}
        <div className="field">
          <div className="file is-boxed">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                accept="image/*"
                onChange={handleContentImagesChange}
                multiple
              />
              <span className="file-cta">
                <span className="file-label">Choose content images...          
            </span>
            </span>
        </label>
      </div>
    </div>
    {contentImages.map((image, index) => (
      <img key={index} src={image} alt={`Content ${index}`} />
    ))}
    <FormControlLabel
      control={
        <Switch
          checked={fanArtEnabled}
          onChange={handleFanArtEnabledChange}
          color="primary"
        />
      }
      label="I want to receive fan arts"
    />
    <FormControlLabel
      control={
        <Switch
          checked={collaborationEnabled}
          onChange={handleCollaborationEnabledChange}
          color="primary"
        />
      }
      label="I receive arti collaboration requests from other users"
    />
    <Button variant="contained" onClick={handleSubmit}>
      Submit
    </Button>
  </form>
</div>
);
};

export default MangaUpload;
