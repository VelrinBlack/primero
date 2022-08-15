import Header from 'components/organisms/Header/Header';
import Cover from 'components/organisms/Cover/Cover';
import About from 'components/organisms/About/About';
import Offer from 'components/organisms/Offer/Offer';
import Contact from 'components/organisms/Contact/Contact';
import Footer from 'components/organisms/Footer/Footer';
import { useRef } from 'react';

const Home = () => {
  const aboutRef = useRef(null);
  const offerRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header aboutRef={aboutRef} offerRef={offerRef} contactRef={contactRef} />
      <Cover />
      <About aboutRef={aboutRef} />
      <Offer offerRef={offerRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default Home;
