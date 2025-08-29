// src/main.jsx (o index.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App'; // Tu componente principal
import './index.css'; // Asegúrate de tener tu CSS principal

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* HelmetProvider debe envolver todo lo que use Helmet, incluyendo App */}
    <HelmetProvider>
      {/* BrowserRouter debe envolver App para que las rutas funcionen */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
