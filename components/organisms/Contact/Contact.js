import StyledWrapper from './Contact.style';
import Form from 'components/molecules/Form/Form';
import ContactCard from 'components/molecules/ContactCard/ContactCard';
import KatarzynaImage from 'images/katarzyna.jpg';
import MateuszImage from 'images/mateusz.jpg';

const Contact = ({ contactRef }) => (
  <StyledWrapper ref={contactRef}>
    <h2 className='title'>Kontakt</h2>
    <div className='flex-container'>
      <div>
        <Form />
        <div className='contact-cards'>
          <ContactCard image={KatarzynaImage} name='Katarzyna' phone='+48 512 316 622' />
          <ContactCard image={MateuszImage} name='Mateusz' phone='+48 883 163 050' />
        </div>
      </div>
      <div>
        <iframe
          loading='lazy'
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.MAPS_API_KEY}&q=Wypożyczalnia+busów+osobowych+grabowa+11+chrzanów`}
        ></iframe>
      </div>
    </div>
  </StyledWrapper>
);

export default Contact;
