        // src/components/EgyptVision.js
        import React from "react";
        import { Container, Typography, Box } from "@mui/material";
        import { styled } from "@mui/system";

        const Section = styled(Box)(({ theme }) => ({
        height: "75vh",
        marginBottom: "50px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr", // Three equal columns
        gap: theme.spacing(1), // Gap between sections
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
        padding: theme.spacing(4),
        clipPath: clipPath, // Adjusting clip path dynamically
        [theme.breakpoints.down("sm")]: {
            clipPath: "none", // Remove clip path on small screens
        },
        }));

        const EgyptVision = () => {
        return (
        <Section id="EgyptVision">
            <Part
            imageUrl="sea.png"
            clipPath="polygon(85% 100%, 0 100%, 0 0, 100% 0)"
            >
            <Container>
                <Typography variant="h5">
                Alignment with Egypt Vision 2030: Water Conservation
                </Typography>
                <Typography variant="body2">
                AQUATECH’s recirculating aquarium system significantly reduces
                water usage by continuously filtering and reusing water. This
                approach aligns with Egypt Vision 2030’s focus on sustainable
                water management, protecting freshwater resources, and ensuring
                their availability for future generations.
                </Typography>
            </Container>
            </Part>
            <Part
            imageUrl="slide4.png"
            clipPath="polygon(15% 0, 100% 0, 85% 100%, 0 100%);"
            >
            <Container>
                <Typography variant="h5">
                Alignment with Egypt Vision 2030: Green Energy
                </Typography>
                <Typography variant="body2">
                Incorporating solar energy into AQUATECH's system demonstrates our
                commitment to green energy solutions, reducing reliance on
                non-renewable sources and cutting operational costs. This supports
                Egypt Vision 2030’s goals for renewable energy adoption and
                sustainable development, promoting a cleaner, more sustainable
                future.
                </Typography>
            </Container>
            </Part>
            <Part
            imageUrl="slide3.png"
            clipPath="polygon(100% 100%, 0 100%, 15% 0 ,100% 0 )"
            >
            <Container>
                <Typography variant="h5">
                Alignment with Egypt Vision 2030: Food Security and Quality
                </Typography>
                <Typography variant="body2">
                AQUATECH enhances food security and quality by producing
                high-quality fish through optimal water and oxygen conditions.
                This aligns with Egypt Vision 2030’s objectives to improve local
                food supplies and meet international standards, boosting economic
                benefits and ensuring a sustainable agricultural sector.
                </Typography>
            </Container>
            </Part>
        </Section>
        );
        };

        export default EgyptVision;
