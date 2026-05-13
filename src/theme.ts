import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2454FF",
      light: "#6389FF",
      dark: "#0032D6",
    },
    secondary: {
      main: "#7C3AED",
    },
    background: {
      default: "#F9FBFF",
    },
    text: {
      primary: "#0F172A",
      secondary: "#4B5563",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px 24px",
        },
      },
    },
  },
});

export default theme;
