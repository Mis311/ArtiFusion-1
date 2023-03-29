import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewArtworkUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState('');

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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSubmit = () => {
    // Submit new artwork
  };

  return (
    <div>
      <h1 className="title is-1">New Artwork Upload</h1>
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
              <input className="file-input" type="file" accept="image/*" onChange={handleImageChange} />
              <span className="file-cta">
                <span className="file-label">Choose an image file...</span>
              </span>
            </label>
          </div>
        </div>
        {image && <img src={image} alt="Preview" />}
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default NewArtworkUpload;
