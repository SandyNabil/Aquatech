// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#194662",
    },
    background: {
      default: "#f4f6f8",
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
  },
  typography: {
    h1: {
      fontSize: "6rem",
      fontWeight: 600,
      textShadow: "2px 2px #6d7676",
      "@media (max-width: 768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 600,
      "@media (max-width: 768px)": {
        fontSize: "1.5rem",
        textShadow: "2px 2px #6d7676",
      },
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 600,
      "@media (max-width: 768px)": {
        fontSize: "1.5rem",
        textShadow: "2px 2px #6d7676",
      },
    },
    body1: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      color: "white",
      textShadow: "2px 2px #6d7676",
      "@media (max-width: 768px)": {
        fontSize: "1.5rem",
      },
    },
    body2: {
      fontSize: "1.2rem",
      color: "#333",
      textShadow: "none",
      fontFamily: "Times",
      fontWeight: "bold",
      "@media (max-width: 768px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontSize: "1.3rem",
      textShadow: "none",
      fontFamily: "Times",
      fontWeight: "bold",
      color: "#d4d4d4",
      "@media (max-width: 768px)": {
        fontSize: "1rem",
      },
    },
  },
});

export default theme;
