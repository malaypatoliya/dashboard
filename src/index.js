import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { createMuiTheme, ThemeProvider } from '@mui/material';

const theme = createMuiTheme({
  fonts: {
    fontFamily: 'Ubuntu',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);