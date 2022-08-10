import StyledWrapper from './Form.styles';

const Form = () => {
  return (
    <StyledWrapper>
      <input type='text' placeholder='Imię' />
      <input type='email' placeholder='Email' />
      <textarea placeholder='Wiadomość'></textarea>
      <button type='submit'>Wyślij</button>
    </StyledWrapper>
  );
};

export default Form;
