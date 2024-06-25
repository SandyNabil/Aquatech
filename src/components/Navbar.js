// src/components/Navbar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "fixed",
  top: 0,
  width: "100%",
  height: "9vh",
  zIndex: theme.zIndex.drawer + 1,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
}));

const Logo = styled("img")({
  height: "6vh",
});

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  color: "#8ca3b1",
  "&:hover": {
    color: "white",
  },
}));

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
  color: "#8ca3b1",
  textShadow: "1px 1px 2px grey",
  fontWeight: "bold",
  "&:hover": {
    color: "white",
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setMobileOpen(false);
  };

  const drawerWidth = 240;

  const drawer = (
    <List
      sx={{
        width: drawerWidth,
        bgcolor: "#194662",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      {["Introduction", "About", "Services", "Sponsors", "Contact"].map(
        (text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => scrollToSection(text)}>
              <CustomListItemText
                primary={text}
                sx={{
                  color: activeSection === text ? "white" : "#8ca3b1",
                }}
              />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );

  return (
    <StyledAppBar>
      <StyledToolbar>
        <Logo src="/Aquatech White -3.png" alt="logo" />
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  bgcolor: "#194662",
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <div>
            {[
              "Introduction",
              "About",
              "Services",
              "Vision 2030",
              "Sponsors",
              "Contact",
            ].map((section) => (
              <CustomButton
                key={section}
                onClick={() => scrollToSection(section)}
                sx={{
                  color: activeSection === section ? "white" : "#8ca3b1",
                }}
              >
                {section}
              </CustomButton>
            ))}
          </div>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
