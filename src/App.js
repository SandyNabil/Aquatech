// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Services from "./components/Services";
import { CssBaseline } from "@mui/material";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import EgyptVision from "./components/EgyptVision";

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
        <EgyptVision/>
        <Sponsors />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
