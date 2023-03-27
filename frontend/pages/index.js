import verifyToken from '../getInitialProps/verifyToken';

import Layout from '../components/Layout/';
import Dashboard from '../components/Dashboard/';

const Index = () => (
  <Layout title="ArtiFusion">
    <Dashboard />
  </Layout>
);

Index.getInitialProps = function (ctx) {
  verifyToken(ctx);
};

export default Index;
