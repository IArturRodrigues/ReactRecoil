import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/main.css';
import 'kalend/dist/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
