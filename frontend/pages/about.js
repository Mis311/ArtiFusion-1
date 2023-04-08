import { Container, Typography, Box } from '@mui/material';
import NavBar from '../components/Layout/Navbar';
const AboutPage = () => {
  return (
   <>
    <NavBar></NavBar>
   
    <Container maxWidth="md">
     
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Artifusion
        </Typography>
        <Typography variant="body1" paragraph>
          Artifusion was created with the vision of bringing artists and art
          enthusiasts together from all around the world. Our mission is to
          provide a platform where creators can share their artwork, stories,
          and visual novels with a global audience, fostering a supportive and
          collaborative community.
        </Typography>
        <Typography variant="body1" paragraph>
          We believe that art transcends boundaries and has the power to connect
          people across cultures, languages, and backgrounds. By creating a
          space where artists can showcase their work and receive feedback, we
          hope to inspire creativity, growth, and learning for everyone
          involved.
        </Typography>
        <Typography variant="body1" paragraph>
          Artifusion not only supports various forms of art, such as
          illustrations, manga, and visual novels, but also encourages
          collaboration between artists. Users can request collaborations,
          exchange ideas, and even create fan art for each other, fostering a
          vibrant and interactive artistic community.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for joining us on this journey, and we hope you enjoy your
          experience on Artifusion. Together, let's create, inspire, and
          appreciate the beauty of art.
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default AboutPage;
