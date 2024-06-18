// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Whatwedo from "./components/Whatwedo";
import Monitoring from "./components/Monitoring";
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
        <Whatwedo />
        <Monitoring />
      </div>
    </div>
  );
}

export default App;
