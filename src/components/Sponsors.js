// src/components/Sponsors.js
import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material"; // Assuming you use Material-UI

const Sponsors = () => {
  return (
    <div id="Sponsors" style={{ padding: "100px 0" }}>
      <Container>
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{ color: "#194662", marginBottom: "20px", textAlign: "center" }}
        >
          Sponsors
        </Typography>

        {/* Grid for Sponsors */}
        <Grid container spacing={3} justifyContent="center">
          {/* Sponsor 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <img
                src="/asrt.png" // Replace with actual image path
                alt="ASRT"
                style={{ width: "300px", height: "250px", borderRadius: "25%" }}
              />
              <Typography
                variant="h4"
                sx={{ marginTop: "10px", color: "#194662", fontWeight: "bold" }}
              >
                ASRT icon
              </Typography>
            </Box>
          </Grid>

          {/* Sponsor 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <img
                src="/sanofi.png" // Replace with actual image path
                alt="Sanofi Green"
                style={{ width: "300px", height: "250px", borderRadius: "25%" }}
              />
              <Typography
                variant="h4"
                sx={{ marginTop: "10px", color: "#194662", fontWeight: "bold" }}
              >
                Sanofi green
              </Typography>
            </Box>
          </Grid>

          {/* Sponsor 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <img
                src="/ecct.png" // Replace with actual image path
                alt="Ecct panel builder"
                style={{ width: "300px", height: "250px", borderRadius: "25%" }}
              />
              <Typography
                variant="h4"
                sx={{ marginTop: "10px", color: "#194662", fontWeight: "bold" }}
              >
                Ecct panel builder
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Sponsors;
