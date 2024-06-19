// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Services from "./components/Services";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <div style={{ marginTop: "9vh" }}>
        {" "}
        {/* Offset for fixed navbar */}
        <Introduction />
        <About />
        <Services />
      </div>
    </div>
  );
}

export default App;
