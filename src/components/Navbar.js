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
  import Button from '@mui/material/Button';

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    width: "100%",
    height: '9vh',
    zIndex: theme.zIndex.drawer + 1,
  }));

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between", // centers horizontally
    alignItems: "center", // centers vertically
    height: "100%", // ensures full height of AppBar is used
  }));

  const Logo = styled("img")({
    height: "6vh",
  });

  const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId) => {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false); // Close the drawer when a section is selected
    };

    const drawerWidth = 240; // You can adjust this value as needed

    const drawer = (
      <List
        sx={{
          width: drawerWidth, // sets a fixed width for the drawer
          bgcolor: "#194662", // sets background color for the drawer
          height: "100%", // ensures full height is used
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly", // centers items vertically in the drawer
        }}
      >
        {["Introduction", "About", "Services", "Sponsors", "Contact"].map(
          (text) => (
            <ListItem key={text}>
              <ListItemButton onClick={() => scrollToSection(text)}>
                <ListItemText
                  primary={text}
                  sx={{
                    color: "black",
                    textShadow: "1px 1px 2px grey",
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              <Button
                color="inherit"
                onClick={() => scrollToSection("Introduction")}
              >
                Introduction
              </Button>
              <Button color="inherit" onClick={() => scrollToSection("About")}>
                About
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("Services")}
              >
                Services
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("Sponsors")}
              >
                Sponsors
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("Contact")}
              >
                Contact
              </Button>
            </div>
          )}
        </StyledToolbar>
        <Drawer
          anchor="right" // changed from "left" to "right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth, // sets a fixed width for the drawer paper
              bgcolor: "#194662", // sets background color for the drawer paper
            },
          }}
        >
          {drawer}
        </Drawer>
      </StyledAppBar>
    );
  };

  export default Navbar;