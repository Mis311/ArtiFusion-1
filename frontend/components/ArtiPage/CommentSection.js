// CommentSection.js
import  { useState } from 'react';
import { Avatar, Button, TextField } from '@material-ui/core';
import './CommentSection.module.scss';

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      user: { name: 'John Doe', avatar: 'https://example.com/avatar.jpg' },
      content: 'This is a sample comment.',
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    setComments([
      ...comments,
      { user: { name: 'John Doe', avatar: 'https://example.com/avatar.jpg' }, content: newComment },
    ]);

    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="comment box">
          <Avatar src={comment.user.avatar} alt={comment.user.name} />
          <div className="comment-content">
            <h3>{comment.user.name}</h3>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <TextField
          label="Add a comment"
          variant="outlined"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;
