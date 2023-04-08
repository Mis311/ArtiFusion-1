import { useState } from 'react';

import ContentItem from './ContentItem';
import { Chip } from '@mui/material';
import verifyToken from '../../getInitialProps/verifyToken';
import GalleryNavbar from './GalleryNavbar';
import ContentRow from './ContentRow';

import TagList from './TagList';

const Dashboard = () => {
  const contentItems = [
    {
      id: 1,
      title: 'Art 1',
      username: 'User 1',
      imageUrls: ['/artworks/art1.jpg'],
      tags: ['tag1', 'tag4', 'tag5'],
      category: 'Image',
      pages: 4,
    },
    {
      id: 2,
      title: 'art 2',
      username: 'User 2',
      imageUrls: ['/artworks/art2.png'],
      tags: ['tag1', 'tag2', 'tag3'],
      category: 'Image',
    },
    {
      id: 3,
      title: 'Art 3',
      username: 'User 2',
      imageUrls: ['/artworks/art3.png'],
      tags: ['tag2', 'tag6', 'tag7'],
      category: 'Manga & Visual Novel',
      stories: 'The world history has changed since 2045 WW3.',
    },
    {
      id: 4,
      title: 'Art 4',
      username: 'User 2',
      imageUrls: ['/artworks/art4.png'],
      tags: ['tag2', 'tag6', 'tag7'],
      category: 'Stories',
    },
    {
      id: 5,
      title: 'Manga 1',
      username: 'User 2',
      imageUrls: ['/artworks/manga1.png'],
      tags: ['tag2', 'tag6', 'tag7'],
      category: 'Stories',
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = category => {
    setSelectedCategory(category);
  };

  // Add filtering logic based on the selected category
  const filteredContentItems = contentItems.filter(item => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Image' && item.category === 'Image') return true;
    if (selectedCategory === 'Stories' && item.category === 'Stories')
      return true;
    if (
      selectedCategory === 'Manga & Visual Novel' &&
      item.category === 'Manga & Visual Novel'
    )
      return true;
    return false;
  });

  const handleSearch = searchText => {
    // Handle search text
  };

  return (
    <div className="columns">
      <main className="column">
        <GalleryNavbar onSelect={handleCategorySelect} />
        <section className="section">
          <div className="columns is-multiline">
            {filteredContentItems.map(item => (
              <div className="column is-one-quarter" key={item.id}>
                <ContentItem
                  title={item.title}
                  username={item.username}
                  imageUrls={item.imageUrls}
                  tags={item.tags}
                />
              </div>
            ))}
          </div>
        </section>
        {/* <TagList
          tags={[{ tag: 'tag1' }, { tag: 'tag2' }, { tag: 'tag3' }]}
          onTagClick={(tag) => console.log(tag)}
        /> */}
      </main>
    </div>
  );
};

export default Dashboard;
