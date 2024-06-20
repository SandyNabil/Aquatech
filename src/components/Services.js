// src/components/Services.js
import React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const servicesData = [
  {
    title: "Enhanced Water Quality Management",
    description:
      "The system employs automated monitoring and adjustment of critical water parameters such as temperature, pH, dissolved oxygen, salinity, and flow rates. These adjustments ensure optimal conditions for fish growth and health, leading to superior quality fish.",
    image: "/fish1.png",
  },
  {
    title: "Increased Fish Density and Yield",
    description:
      "By implementing high-efficiency oxygenation methods and precise environmental controls, the system supports a higher density of fish per square meter. This results in increased yield and productivity, making fish farming more profitable and sustainable.",
    image: "/fish1.png",
  },
  {
    title: "Comprehensive Control Integration",
    description:
      "The project features an integrated control system combining PLCs, SCADA, IIOT applications, and solar energy. This holistic approach reduces operational costs, enhances system reliability, and supports remote monitoring and management via web and mobile platforms.",
    image: "/fish1.png",
  },
  {
    title: "Sustainability and Economic Efficiency",
    description:
      "The incorporation of solar energy not only reduces the dependency on conventional power sources but also cuts down operational expenses, making the system economically viable. The sustainable design ensures minimal environmental impact, aligning with global ecological standards.",
    image: "/fish1.png",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="Services"
      style={{
        minHeight: "75vh",
        padding: "50px 0",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "50px", // Added spacing between sections
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "#194662", marginBottom: "20px", textAlign: "center" }}
      >
        What we do?
      </Typography>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {servicesData.map((service, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "100%" : "calc(25% - 20px)", // Adjusted width calculation for desktop
              marginBottom: "20px", // Added margin between boxes
              borderRadius: "10px",
              overflow: "hidden",
              // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Added box shadow
              bgcolor: "#ffffff",
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                overflow: "hidden",
                bgcolor: "#ffffff",
                // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Added box shadow
                // borderRight: "ridge 3px #194662", // Ridge border on the right side only
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderBottom: "none", // Remove border from the bottom of the image
                }}
              />
            </Box>

            {/* Text Box */}
            <Box
              sx={{
                backgroundColor: "#194662",
                color: "#fff",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "5px" }}>
                {service.title}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#f4f6f8",
                padding: "10px",
                textAlign: "center",
                boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)", // Added box shadow
                border: "ridge 3px #194662", // Ridge border on the right side only
              }}
            >
              <Typography variant="body2">{service.description}</Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Services;
