import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import getNameServer from '../../utils/getNameServer';



const ImageUpload = ({ nToken }) => {
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
    const fileType = file.type || '';

    const reader = new FileReader();

    if(file) {
      reader.readAsBinaryString(file);
    }

    reader.onload = (ev) => {
      setImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
    };
  };

  const handleSubmit = async (ctx) => {
    // Submit new artwork
    const artworkData = new FormData();
    const server = getNameServer(ctx);

    artworkData.append('title', title);
    artworkData.append('description', description);
    artworkData.append('tags', tags);
    artworkData.append('image', image);

    const data = new URLSearchParams(artworkData);

    fetch(`${server}/api/upload_artwork`, {
      method: 'POST',
      body: data,
      headers: {
        authorization: nToken,
      }
    });
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
        {image && <img src={image} />}
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default ImageUpload;
