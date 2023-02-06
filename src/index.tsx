import React from 'react';
import { App } from './App';
import { createRoot } from 'react-dom/client'

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);