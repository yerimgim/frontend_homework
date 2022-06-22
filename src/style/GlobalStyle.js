import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --small-font-size: 14px;
    --medium-font-size: 15px;
    --large-font-size: 36px;

    --small-font-color: rgba(58, 58, 58, 0.8);
    --medium-font-color: rgba(58, 58, 58, 0.7);
    --large-font-color: rgb(58, 58, 58);

    --small-font-line-height: 22px;
  }


  * {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-family: sans-serif;
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
