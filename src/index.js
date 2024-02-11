import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure you have this CSS file or remove this line
import App from './App'; // Ensure you have an App.js component or adjust accordingly
import reportWebVitals from './reportWebVitals'; // Optional, remove if not using
import './styles/normalize.css';
import './styles/oflow.css';
import './styles/mainstyles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you're not using reportWebVitals, you can remove this part
reportWebVitals();

