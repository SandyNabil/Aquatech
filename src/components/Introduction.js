    // src/components/Introduction.js
    import React from "react";
    import { Container, Typography } from "@mui/material";
    import { styled } from "@mui/material/styles";

    const Section = styled("div")({
    background: `url('/intro.png') center/cover no-repeat`, // Set background image properties
    height: "75vh", // Adjust the height as per your design
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start", // Align container to the left
    color: "#fff", // Set text color to white for contrast
    textAlign: "left",
    });


    const Introduction = () => {
    return (
      <Section id="Introduction">
        <Container>
          <Typography variant="h1" gutterBottom>
            AquaTech is the next revolution in fish farming.
          </Typography>
          <Typography variant="body1">
            AquaTech is a fully automated and stable fish farming system that
            can build the appropriate environment for all types of fish in all
            regions of the world to meet all the needs and expectations of the
            world in terms of quality and quantity with global characteristics.
          </Typography>
        </Container>
      </Section>
    );
    };

    export default Introduction;
