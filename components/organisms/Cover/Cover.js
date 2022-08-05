import StyledWrapper from './Cover.style';
import CoverImage from 'images/cover.png';
import Image from 'next/image';

const Cover = () => (
  <StyledWrapper>
    <div className='shadow'></div>
    <div className='cover-image-container'>
      <Image src={CoverImage} alt='cover image' layout='fill' />
    </div>
    <div className='text'>
      <h1 className='title'>Lorem ipsum dolor sit amet</h1>
      <h3 className='subtitle'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
        odio quam, in cursus ex sodales laoreet.
      </h3>
    </div>
  </StyledWrapper>
);

export default Cover;
