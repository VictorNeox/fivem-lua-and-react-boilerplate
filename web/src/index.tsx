import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';

import { GlobalStyle } from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);
