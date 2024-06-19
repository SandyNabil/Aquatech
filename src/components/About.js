// src/components/About.js
import React from "react";
import { Container, Typography, Grid } from "@mui/material"; // Import Grid for layout

const About = () => {
  return (
    <div id="About" style={{ height: "75vh", padding: "100px 0" }}>
      <Container>
        {/* Title */}
        <Typography variant="h2" gutterBottom>
          What is AQUATECH
        </Typography>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Box for Text */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.5rem", lineHeight: 2 }}
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
          <Grid item xs={12} md={6}>
            <img
              src="/aquarium.jpg"
              alt="Aquarium"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
