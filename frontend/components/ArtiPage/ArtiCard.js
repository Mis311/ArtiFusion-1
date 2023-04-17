import ImageContent from './ImageContent';
import MangaContent from './MangaContent';
import NovelContent from './NovelContent';
import VisualNovelContent from './VisualNovelContent';
import styles from './ArtiCard.module.scss';

const ArtiCard = ({ art, contentType, contentData }) => {
  const renderContent = () => {
    const imageClassName = styles['art-card-image'];
  
    switch (contentType) {
      case 'image':
        return <ImageContent imageUrl={contentData.imageUrl} imageClassName={imageClassName} />;
      case 'manga':
        return <MangaContent images={contentData.images} imageClassName={imageClassName} />;
      case 'novel':
        return <NovelContent text={contentData.text} />;
      case 'visualNovel':
        return <VisualNovelContent scenes={contentData.scenes} imageClassName={imageClassName} />;
      default:
        return null;
    }
  };
  

  return (
    <div className={styles['art-card']}>
      {renderContent()}
      <h3>{art.title}</h3>
      <p>{art.description}</p>
    </div>
  );
};

export default ArtiCard;
