import StyledWrapper from './About.style';
import AboutImage from 'images/about.png';
import Image from 'next/image';

const About = () => (
  <StyledWrapper>
    <div className='text'>
      <h2 className='title'>Kilka słów o nas</h2>
      <p className='content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
        odio quam, in cursus ex sodales laoreet. Pellentesque in odio et orci
        sagittis iaculis a et nunc. Donec luctus, nulla in auctor laoreet, elit
        lectus gravida enim, non congue dui felis eu urna. Nulla interdum
        pulvinar ipsum in dignissim. Nulla interdum interdum nisi. Nam sagittis
        ultricies mi vel fermentum. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae;
      </p>
    </div>
    <div className='image-container'>
      <Image src={AboutImage} alt='about image' layout='fill' />
    </div>
  </StyledWrapper>
);

export default About;
