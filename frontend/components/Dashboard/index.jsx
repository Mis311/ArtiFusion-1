import Sidebar from './Sidebar';
import ContentItem from './ContentItem';
import SearchBar from './SearchBar';
const Dashboard = () => {
  const contentItems = [
    {
      id: 1,
      title: 'Art 1',
      username: 'User 1',
      thumbnailUrl: '/thumbnails/art1.jpg',
    },
    {
      id: 2,
      title: 'Manga 1',
      username: 'User 2',
      thumbnailUrl: '/thumbnails/manga1.jpg',
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
                />
              </div>
            ))}
          </div>
        </section>
        <section>
        <SearchBar placeholder="Search" onSearch={handleSearch} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
