// src/components/About.js
import React from "react";
import {
  Container,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material"; // Import Grid for layout

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="About"
      style={{
        height: "75vh",
        padding: "50px 0",
        background: "#194662",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        
        <Grid
          container
          spacing={isMobile ? 2 : 4}
          alignItems="center"
          justifyContent="space-between"
        ></Grid>
        <Grid
          container
          spacing={isMobile ? 2 : 4}
          alignItems="center"
          sx={{
            // bgcolor: "grey", // sets background color to grey
            // borderRadius: "8px", // adds border radius
            padding: "20px", // adds padding inside the box
            margin: "auto",
          }}
        >
          {/* Left Box for Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              style={{ color: "#fff", marginBottom: "20px" }}
            >
              What is AQUATECH
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#fff", textShadow: "none" }}
            >
              AQUATECH is an innovative initiative dedicated to revolutionizing
              the aquaculture industry through the development of a fully
              automated recirculating aquarium system. Our cutting-edge
              technology integrates advanced water adjustment stages,
              high-efficiency oxygenation, and precise environmental controls to
              cultivate high-quality fish at optimal densities. Utilizing
              Programmable Logic Controllers (PLC), specialized sensors, SCADA
              systems, and Industrial Internet of Things (IIOT) web and mobile
              applications, our system ensures superior fish health and growth.
              Additionally, the incorporation of solar power enhances
              sustainability and reduces operational costs. AQUATECH not only
              addresses the challenges of traditional fish farming but also
              aligns with Egypt's 2030 vision for sustainable development,
              aiming to boost the country's economic growth and global
              competitiveness in aquaculture.
            </Typography>
          </Grid>

          {/* Right Box for Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              // bgcolor: "grey", // sets background color to grey
              // borderRadius: "8px", // adds border radius
              display: "flex",
              justifyContent: "center",
              padding: "20px", // adds padding inside the box
              margin: "auto", // centers the box in the available space
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/favicon.png"
                alt="Aquarium"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
