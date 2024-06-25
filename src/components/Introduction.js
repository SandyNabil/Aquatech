// src/components/Introduction.js
import React, { useEffect, useState, useRef } from "react";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const Section = styled("div")({
  position: "relative",
  overflow: "hidden",
  height: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
  "@media (max-width: 768px)": {
    height: "50vh", // Adjust height for smaller screens
  },
});

const SlideContainer = styled("div")({
  display: "flex",
  width: "100%",
  transition: "transform 1s ease-in-out",
});

const Slide = styled("div")({
  minWidth: "100%",
  height: "75vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "@media (max-width: 768px)": {
    height: "50vh", // Adjust height for smaller screens
  },
});

const Arrow = styled("div")({
  position: "absolute",
  top: "50%",
  width: "auto",
  padding: "16px",
  marginTop: "-22px",
  color: "white",
  fontWeight: "bold",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 1,
  "@media (max-width: 768px)": {
    padding: "8px",
    fontSize: "18px",
  },
});

const slides = [
  { text: "Digitalized fisheries technologies", img: "/intro.png" },
  { text: "Fish quality solutions", img: "/new1.png" },
  { text: "Innovative sustainable devices", img: "/slide3.png" },
  { text: "Precision Engineering design", img: "/new.png" },
];

const Introduction = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const totalSlides = slides.length;
  const slideContainerRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 3000); // Change slide every 3 seconds
  //   return () => clearInterval(interval);
  // }, []);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        if (currentSlide === 0) {
          setCurrentSlide(totalSlides);
          slideContainerRef.current.style.transition = "none";
          slideContainerRef.current.style.transform = `translateX(-${
            totalSlides * 100
          }%)`;
          requestAnimationFrame(() => {
            slideContainerRef.current.style.transition =
              "transform 1s ease-in-out";
          });
        } else if (currentSlide === totalSlides + 1) {
          setCurrentSlide(1);
          slideContainerRef.current.style.transition = "none";
          slideContainerRef.current.style.transform = `translateX(-100%)`;
          requestAnimationFrame(() => {
            slideContainerRef.current.style.transition =
              "transform 1s ease-in-out";
          });
        }
      }, 1000); // Match the transition duration
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning, currentSlide, totalSlides]);

  return (
    <Section id="Introduction">
      <Arrow style={{ left: "10px" }} onClick={handlePrev}>
        &#10094;
      </Arrow>
      <SlideContainer
        ref={slideContainerRef}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {[slides[totalSlides - 1], ...slides, slides[0]].map((slide, index) => (
          <Slide
            key={index}
            style={{ background: `url(${slide.img}) center/cover no-repeat` }}
          >
            <Container>
              <Typography
                variant="h1"
                gutterBottom
                sx={{ fontSize: isMobile ? "2.5rem" : "6rem" }}
              >
                AQUATECH
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: isMobile ? "1.5rem" : "3.5rem" }}
              >
                {slide.text}
              </Typography>
            </Container>
          </Slide>
        ))}
      </SlideContainer>
      <Arrow style={{ right: "10px" }} onClick={handleNext}>
        &#10095;
      </Arrow>
    </Section>
  );
};

export default Introduction;
