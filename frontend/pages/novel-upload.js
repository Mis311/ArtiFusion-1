
import verifyToken from '../getInitialProps/verifyToken';
import Layout from '../components/Layout';

import NovelUpload from '../components/UploadArtwork/NovelUpload';

const NovelUploadPage = ({ token }) => {
  return (
    <Layout title="Upload Novel">
      <NovelUpload nToken={token} />
    </Layout>
  );
};

NovelUploadPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
  const token = ctx.store.getState().authentication.token;
  return { token };
};

export default NovelUploadPage;
