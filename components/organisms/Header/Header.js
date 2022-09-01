import StyledWrapper from './Header.style';
import { useState } from 'react';
import Image from 'next/image';
import Logo from 'images/logo.svg';

const Header = ({ aboutRef, offerRef, contactRef }) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRefMobile = (ref) => {
    setHamburgerActive(false);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <StyledWrapper hamburgerActive={hamburgerActive}>
      <div className='logo'>
        <Image src={Logo} alt='logo' layout='fill' />
      </div>
      <nav className='navigation'>
        <li onClick={() => scrollToRef(aboutRef)}>O nas</li>
        <li onClick={() => scrollToRef(offerRef)}>Oferta</li>
        <li onClick={() => scrollToRef(contactRef)}>Kontakt</li>
      </nav>
      <button
        className='hamburger'
        onClick={() => {
          setHamburgerActive((prevState) => !prevState);
        }}
      >
        <div className='stripe'></div>
        <div className='stripe'></div>
        <div className='stripe'></div>
      </button>
      <nav className='mobile-navigation'>
        <li onClick={() => scrollToRefMobile(aboutRef)}>O nas</li>
        <li onClick={() => scrollToRefMobile(offerRef)}>Oferta</li>
        <li onClick={() => scrollToRefMobile(contactRef)}>Kontakt</li>
      </nav>
    </StyledWrapper>
  );
};

export default Header;
