// src/components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "fixed",
  top: 0,
  width: "100%",
  height: "9vh",
  zIndex: theme.zIndex.drawer + 1,
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", // Center items vertically
  height: "100%", // Ensure Toolbar takes the full height of AppBar
});

const Logo = styled("img")({
  height: "6vh",
});

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo src="/Aquatech White -3.png" alt="logo" />
        </div>
        <div>
          <Button
            color="inherit"
            onClick={() => scrollToSection("Introduction")}
          >
            Introduction
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("Whatwedo")}>
            What we do
          </Button>
          <Button color="inherit" onClick={() => scrollToSection("Monitoring")}>
            Monitoring
          </Button>
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
