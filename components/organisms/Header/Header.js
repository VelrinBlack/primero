import StyledWrapper from './Header.style';

const Header = ({ aboutRef, offerRef, contactRef }) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledWrapper>
      <div className='logo'></div>
      <nav className='navigation'>
        <li onClick={() => scrollToRef(aboutRef)}>O nas</li>
        <li onClick={() => scrollToRef(offerRef)}>Oferta</li>
        <li onClick={() => scrollToRef(contactRef)}>Kontakt</li>
      </nav>
    </StyledWrapper>
  );
};

export default Header;
