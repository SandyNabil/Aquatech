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
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 500,
        },
        body1: {
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          textShadow: "1px 1px #6d7676",
        },
        body2: {
          fontSize: "8rem",
          color: "#555",
        },
      },
    });

    export default theme;
