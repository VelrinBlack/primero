import StyledWrapper from './ContactCard.style';
import Image from 'next/image';

const ContactCard = ({ image, name, phone }) => (
  <StyledWrapper>
    <div className='image-container'>
      <Image src={image} alt='zdjęcie kontaktowe' layout='fill' />
    </div>
    <h4 className='name'>{name}</h4>
    <a href={`tel:${phone}`} className='phone'>
      {phone}
    </a>
  </StyledWrapper>
);

export default ContactCard;
