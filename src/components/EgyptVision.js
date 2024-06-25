    import React from "react";
    import { Container, Typography, Box } from "@mui/material";
    import { styled } from "@mui/system";

    const Section = styled(Box)(({ theme }) => ({
    height: "75vh",
    marginBottom: "50px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // Three equal columns
    gap: theme.spacing(0.1), // Gap between sections
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "1fr", // Stack on small screens
        height: "auto", // Auto height for stacking
    },
    }));

    const Part = styled(Box)(({ theme, imageUrl, clipPath }) => ({
    position: "relative",
    backgroundImage: `url(${process.env.PUBLIC_URL}/${imageUrl})`, // Using public folder and imageUrl prop
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
        alignItems: "center",
    textAlign:"center",
    padding: theme.spacing(4),
    clipPath: clipPath, // Adjusting clip path dynamically
    [theme.breakpoints.down("sm")]: {
        clipPath: "none", // Remove clip path on small screens
    },
    }));

    const SectionTitle = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    marginBottom: theme.spacing(3), // Adjust as needed
    }));

    const EgyptVision = () => {
    return (
      <>
        <SectionTitle
          variant="h2"
          sx={{ color: "#194662", marginBottom: "20px", textAlign: "center" }}
        >
          Egypt Vision 2030
        </SectionTitle>

        <Section id="EgyptVision">
          <Part
            imageUrl="underwater.png"
            clipPath="polygon(90% 100%, 0 100%, 0 0, 100% 0)"
          >
            <Container>
              <Typography variant="h5">
                Alignment with Egypt Vision 2030: Water Conservation
              </Typography>
              <Typography variant="h6">
                AQUATECH’s recirculating aquarium system significantly reduces
                water usage by continuously filtering and reusing water. This
                approach aligns with Egypt Vision 2030’s focus on sustainable
                water management, protecting freshwater resources, and ensuring
                their availability for future generations.
              </Typography>
            </Container>
          </Part>
          <Part
            imageUrl="new1.png"
            clipPath="polygon(10% 0, 100% 0, 90% 100%, 0 100%);"
          >
            <Container>
              <Typography variant="h5">
                Alignment with Egypt Vision 2030: Green Energy
              </Typography>
              <Typography variant="h6">
                Incorporating solar energy into AQUATECH's system demonstrates
                our commitment to green energy solutions, reducing reliance on
                non-renewable sources and cutting operational costs. This
                supports Egypt Vision 2030’s goals for renewable energy adoption
                and sustainable development, promoting a cleaner, more
                sustainable future.
              </Typography>
            </Container>
          </Part>
          <Part
            imageUrl="underwater2.png"
            clipPath="polygon(100% 100%, 0 100%, 10% 0 ,100% 0 )"
          >
            <Container>
              <Typography variant="h5">
                Alignment with Egypt Vision 2030: Food Security and Quality
              </Typography>
              <Typography variant="h6">
                AQUATECH enhances food security and quality by producing
                high-quality fish through optimal water and oxygen conditions.
                This aligns with Egypt Vision 2030’s objectives to improve local
                food supplies and meet international standards, boosting
                economic benefits and ensuring a sustainable agricultural
                sector.
              </Typography>
            </Container>
          </Part>
        </Section>
      </>
    );
    };

    export default EgyptVision;
