// src/components/About.js
import React from "react";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="About"
      style={{
        minHeight: "75vh",
        padding: "50px 0",
        background: "#f4f6f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "50px", // Added spacing between sections
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Left Box for Text */}
        <Box
          sx={{
            width: isMobile ? "100%" : "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            textAlign: isMobile ? "center" : "left",
            border: "1vh ridge #194662",
            borderRadius: "10%",
            marginBottom: isMobile ? "20px" : "0", // Add margin at the bottom for mobile
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#194662", marginBottom: "20px" }}
          >
            What is AQUATECH
          </Typography>
          <Typography variant="body2" >
            AQUATECH is an innovative initiative dedicated to revolutionizing
            the aquaculture industry through the development of a fully
            automated recirculating aquarium system. Our cutting-edge technology
            integrates advanced water adjustment stages, high-efficiency
            oxygenation, and precise environmental controls to cultivate
            high-quality fish at optimal densities. Utilizing Programmable Logic
            Controllers (PLC), specialized sensors, SCADA systems, and
            Industrial Internet of Things (IIOT) web and mobile applications,
            our system ensures superior fish health and growth. Additionally,
            the incorporation of solar power enhances sustainability and reduces
            operational costs. AQUATECH not only addresses the challenges of
            traditional fish farming but also aligns with Egypt's 2030 vision
            for sustainable development, aiming to boost the country's economic
            growth and global competitiveness in aquaculture.
          </Typography>
        </Box>

        {/* Right Box for Image */}
        <Box
          sx={{
            width: isMobile ? "100%" : "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            border: "1vh ridge #194662",
            borderRadius: "10%",
          }}
        >
          <img
            src="/favicon.png"
            alt="Aquarium"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default About;
