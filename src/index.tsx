import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { loadSVGImages } from './lib/svg/svgloadimages';

loadSVGImages()
.then(()=>{//после подгрузки картинок, будет запущенj React приложение
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )}
);
