import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

reportWebVitals();
