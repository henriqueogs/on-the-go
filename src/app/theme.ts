import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8A9099',
    },
  },
  typography: {
    fontFamily: 'var(--font-public-sans), Arial, Helvetica, sans-serif',
  },
});

export default theme;