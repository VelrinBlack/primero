import StyledWrapper from './Offer.style';
import Card from 'components/molecules/Card/Card';
import Card1Image from 'images/card1.webp';

const Offer = () => (
  <StyledWrapper>
    <h2 className='title'>Nasza oferta</h2>
    <div className='cards-container'>
      <Card
        img={Card1Image}
        price='230 - 260 zł'
        title='Kamper Knaus'
        link='https://www.olx.pl/d/oferta/kamper-knaus-wynajem-od-250-zl-camper-prawo-jazdy-kat-b-CID3018-IDLjb7M.html?reason=seller_listing%7Cnormal'
      />
      <Card
        img={Card1Image}
        price='230 - 260 zł'
        title='Kamper Knaus'
        link='https://www.olx.pl/d/oferta/kamper-knaus-wynajem-od-250-zl-camper-prawo-jazdy-kat-b-CID3018-IDLjb7M.html?reason=seller_listing%7Cnormal'
      />
      <Card
        img={Card1Image}
        price='230 - 260 zł'
        title='Kamper Knaus'
        link='https://www.olx.pl/d/oferta/kamper-knaus-wynajem-od-250-zl-camper-prawo-jazdy-kat-b-CID3018-IDLjb7M.html?reason=seller_listing%7Cnormal'
      />
    </div>
  </StyledWrapper>
);

export default Offer;
