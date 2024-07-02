// src/index.js
import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/Theme";
import { createRoot } from "react-dom";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>,
//   document.getElementById("root")
// );
