// src/components/Contact.js
import React from "react";
import { Container, Typography, Grid, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <div
      id="Contact"
      style={{
        padding: "20px 0",
        backgroundColor: "#194662",
        color: "#fff",
        minHeight: "20vh",
      }}
    >
      <Container>
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            marginBottom: "20px",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          Contact Us
        </Typography>

        {/* Grid for Contact Details */}
        <Grid container direction="column" alignItems="center" spacing={2}>
          {/* Gmail */}
          <Grid item>
            <Box display="flex" alignItems="center">
              <IconButton
                href="mailto:magicalcontact@gmail.com"
                sx={{ color: "#fff" }}
              >
                <EmailIcon sx={{ fontSize: 45, color: "red" }} />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  marginLeft: "15px",
                  fontSize: "1.5rem",
                  color: "#BBBBBB",
                  textShadow: "none",
                }}
              >
                magicalcontact@gmail.com
              </Typography>
            </Box>
          </Grid>

          {/* Phone */}
          <Grid item>
            <Box display="flex" alignItems="center">
              <IconButton sx={{ color: "#fff" }}>
                <PhoneIcon sx={{ fontSize: 50, color: "green" }} />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  marginLeft: "15px",
                  fontSize: "2rem",
                  color: "#BBBBBB",
                  textShadow: "none",
                }}
              >
                +20 123 456 7890
              </Typography>
            </Box>
          </Grid>
          {/* Facebook */}
          <Grid item>
            <Box display="flex" alignItems="center">
              <IconButton
                href="https://www.facebook.com/magicalcontact1"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#fff" }}
              >
                <FacebookIcon sx={{ fontSize: 50, color: "#4267B2" }} />
              </IconButton>
              <Typography
                variant="body1"
                sx={{
                  marginLeft: "15px",
                  fontSize: "2rem",
                  color: "#BBBBBB",
                  textShadow: "none",
                }}
              >
                magicalcontact1
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
