import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrección aquí
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { HospitalProvider } from './context/HospitalContext';

const container = document.getElementById('root'); // Selecciona el contenedor raíz
const root = createRoot(container); // Usa createRoot de react-dom/client

root.render(
  <React.StrictMode>
    <HospitalProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </HospitalProvider>
  </React.StrictMode>
);
