'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#4C3549",
    },
    secondary: {
      main: "#883955"
    },
  },

  typography: {
    fontFamily: 'var(--font-lora)',
    h1: {
      fontsize: "3rem",
    },
    h2: {
      fontsize: "1.75rem",
    },
    h3: {
      fontsize: "1.5rem",
    },
  },
});

export default theme;