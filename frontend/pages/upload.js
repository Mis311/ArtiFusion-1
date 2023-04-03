import NewArtworkUpload from '../components/UploadArtwork/NewArtworkUpload';
import verifyToken from '../getInitialProps/verifyToken';

import Layout from '../components/Layout';

const UploadPage = ({ token }) => {
  return (
    <Layout title="Upload">
     <NewArtworkUpload nToken = { token } />
    </Layout>
  );
};

UploadPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
  const token = ctx.store.getState().authentication.token;
  return { token };
};

export default UploadPage;
