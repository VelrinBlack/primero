import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
     height: 100%;
     font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
