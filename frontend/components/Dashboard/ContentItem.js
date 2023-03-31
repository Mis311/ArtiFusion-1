

const ContentItem = ({ title, username, thumbnailUrl }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={thumbnailUrl} alt={title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">by {username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
