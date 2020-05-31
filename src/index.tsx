import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loadSVGImages } from './lib/svg/svgloadimages';

loadSVGImages();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
