import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importing global and component-specific styles
import './styles/global.css';
import './styles/landingPage.css';
import './styles/nav.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
