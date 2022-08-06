import StyledWrapper from './Card.style';
import Image from 'next/image';
import PropTypes from 'prop-types';

const Card = ({ img, title, price, link }) => (
  <StyledWrapper>
    <div className='image-container'>
      <Image src={img} alt='samochód' layout='fill' />
    </div>

    <div className='content'>
      <h3 className='title'>{title}</h3>
      <p className='price'>{price}</p>
      <a href={link} className='link' target='blank'>
        Sprawdź
      </a>
    </div>
  </StyledWrapper>
);

Card.propTypes = {
  img: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
