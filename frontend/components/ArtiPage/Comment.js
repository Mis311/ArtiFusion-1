
const Comment = ({ avatar, name, text, onReply }) => {
  return (
    <div className="comment">
      <div className="avatar">
        <img src={avatar} alt={`${name}'s avatar`} />
      </div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="text">{text}</div>
        <button className="reply-button" onClick={onReply}>
          Reply
        </button>
      </div>
    </div>
  );
};

export default Comment;
