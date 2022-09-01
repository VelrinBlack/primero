import StyledWrapper from './Form.styles';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('To pole jest wymagane');
    } else {
      setEmailError('');
    }

    if (!message) {
      setMessageError('To pole jest wymagane');
    } else {
      setMessageError('');
    }

    if (email && message) {
      // send API request
    }
  };

  return (
    <StyledWrapper>
      <input
        type='text'
        placeholder='Imię'
        value={name}
        onChange={handleNameChange}
      />

      <input
        type='email'
        placeholder='Email *'
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <span className='error'>{emailError}</span>}

      <textarea
        placeholder='Wiadomość *'
        value={message}
        onChange={handleMessageChange}
      ></textarea>
      {messageError && <span className='error'>{messageError}</span>}

      <button type='submit' onClick={handleSubmit}>
        Wyślij
      </button>
    </StyledWrapper>
  );
};

export default Form;
