import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --awards-font-size: 14px;
    --logo-font-size: 15px;
    --metrics-font-size: 36px;

    --awards-font-color: rgba(58, 58, 58, 0.8);
    --logo-font-color: rgba(58, 58, 58, 0.7);
    --metrics-font-color: rgb(58, 58, 58);

    --awards-line-height: 22px;
  }


  * {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-family: sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: none;
  }

  html, body {
    width: 100%;
    min-width: 1200px;
    height: 100%;
  }

  img {
    width: 100%;
    border: 0;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
