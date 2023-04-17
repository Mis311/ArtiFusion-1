import ImageUpload from '../components/UploadArtwork/ImageUpload';
import verifyToken from '../getInitialProps/verifyToken';
import Link from 'next/link';
import Layout from '../components/Layout';

const UploadPage = ({ token }) => {
  return (
    <Layout title="Upload">
    <nav>
        <ul>
          <li>
            <Link href="/upload">
              <a>Image</a>
            </Link>
          </li>
          <li>
            <Link href="/manga-upload">
              <a>Manga</a>
            </Link>
          </li>
          <li>
            <Link href="/novel-upload">
              <a>Stories</a>
            </Link>
          </li>
        </ul>
      </nav>
     <ImageUpload nToken = { token } />
    </Layout>
  );
};

UploadPage.getInitialProps = function (ctx) {
  verifyToken(ctx);
  const token = ctx.store.getState().authentication.token;
  return { token };
};

export default UploadPage;
