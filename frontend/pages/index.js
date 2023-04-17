import verifyToken from '../getInitialProps/verifyToken';

import Layout from '../components/Layout/';
import Dashboard from '../components/Dashboard/';
import getNameServer from '../utils/getNameServer';

const Index = ({ artworks }) => {
  return (
    <Layout title="ArtiFusion">
      <Dashboard contents = { artworks } />
    </Layout>
  );
};

Index.getInitialProps = async ctx => {
  verifyToken(ctx);
  const token = ctx.store.getState().authentication.token;
  const server = getNameServer(ctx);

  const res = await fetch(`${server}/api/artworks`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
  });

  const { artworks } = await res.json();

  return { artworks };
};

export default Index;
