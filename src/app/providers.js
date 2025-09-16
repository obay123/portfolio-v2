'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#CE1126', // Syrian red
    },
    secondary: {
      main: '#007A3D', // Syrian green
    },
    background: {
      default: '#FFFFFF', // White
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000', // Black
      secondary: '#333333',
    },
    syrian: {
      red: '#CE1126',
      black: '#000000',
      white: '#FFFFFF',
      green: '#007A3D',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
} 