import Sidebar from './Sidebar';
import ContentItem from './ContentItem';
import { Chip } from '@mui/material';
import TagList from './TagList';

const Dashboard = () => {
  const contentItems = [
    {
      id: 1,
      title: 'Art 1',
      username: 'User 1',
      thumbnailUrl: '/artworks/art1.jpg',
      tags: ['tag1', 'tag4', 'tag5'],
    },
    {
      id: 2,
      title: 'art 2',
      username: 'User 2',
      thumbnailUrl: '/artworks/art2.png',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      id: 3,
      title: 'Art 3',
      username: 'User 2',
      thumbnailUrl: '/artworks/art3.png',
      tags: ['tag2', 'tag6', 'tag7'],
    },
    {
      id: 4,
      title: 'Art 4',
      username: 'User 2',
      thumbnailUrl: '/artworks/art4.png',
      tags: ['tag2', 'tag6', 'tag7'],
    },
    {
      id: 5,
      title: 'Manga 1',
      username: 'User 2',
      thumbnailUrl: '/artworks/manga1.png',
      tags: ['tag2', 'tag6', 'tag7'],
    },
  ];

  const handleSearch = searchText => {
    // Handle search text
  };
  return (
    <div className="columns">
      <Sidebar />
      <main className="column">
        <section className="section">
          <div className="columns is-multiline">
            {contentItems.map(item => (
              <div className="column is-one-quarter" key={item.id}>
                <ContentItem
                  title={item.title}
                  username={item.username}
                  thumbnailUrl={item.thumbnailUrl}
                  tags={item.tags}
                />
              </div>
            ))}
          </div>
        </section>
        {/* <TagList tags={[{tag: "tag1"}, {tag: "tag2"}, {tag: "tag3"}]} onTagClick={(tag) => console.log(tag)} /> */}
      </main>
    </div>
  );
};

export default Dashboard;
