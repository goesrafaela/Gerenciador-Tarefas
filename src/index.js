import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Certifique-se de que o caminho para o App está correto
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você quiser medir o desempenho do app, você pode passar uma função a `reportWebVitals`
reportWebVitals();
