// ArtiPage.js
import Layout from '../components/Layout/index';
import CommentSection from '../components/ArtiPage/CommentSection';

import ArtiCard from '../components/ArtiPage/ArtiCard';
// ArtiPage.js
const ArtiPage = () => {
    // Hardcoded content type and data
    const contentType = 'image';
    const contentData = {
      imageUrl: '/artworks/art1.jpg',
      images: [
        '/artworks/art1.jpg',
        '/artworks/art2.png',
      ],
      text: 'This is a sample novel content.',
      scenes: [
        {
          image: '/artworks/art3.png',
          text: 'Visual novel scene 1',
        },
        {
          image: '/artworks/art4.png',
          text: 'Visual novel scene 2',
        },
      ],
    };
  
    return (
      <Layout>
        <ArtiCard
          art={{
            title: 'Sample Art',
            description: 'This is a sample art description.',
          }}
          contentType={contentType}
          contentData={contentData}
        />
        <CommentSection />
      </Layout>
    );
  };
  
  export default ArtiPage;
  