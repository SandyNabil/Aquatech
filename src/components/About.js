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
        height: "75vh",
        width:"100%",
        padding: "50px 0",
        background: "#f4f6f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          // justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Left Box for Text */}
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            textAlign: isMobile ? "center" : "left",
            // bgcolor: "white",
            border: "1vh ridge #194662",
            borderRadius: "10%",
            marginTop:"2vh",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "#194662", marginBottom: "20px" }}
          >
            What is AQUATECH
          </Typography>
          <Typography variant="body2" sx={{ color: "#333" }}>
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
            width: isMobile ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
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
