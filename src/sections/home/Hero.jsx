import React from "react";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import heroImage from "../../assets/img2.webp";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: { xs: "85vh", md: "100vh" },
        width: "100%",
        color: "white",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        borderRadius: {
          xs: "0 0 50% 50% / 0 0 10% 10%",
          md: "0 0 100% 100% / 0 0 15% 15%",
        },
        zIndex: 1,
        boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
      }}
    >
      {/* 🔥 BACKGROUND IMAGE */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "contrast(1.1) brightness(0.85)",
          animation: "kenBurns 25s ease-out infinite alternate",

          "@keyframes kenBurns": {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(1.12)" },
          },
        }}
      />

      {/* 🔥 GOLDEN GRADIENT OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "linear-gradient(to right, rgba(30,20,10,0.95) 10%, rgba(30,20,10,0.75) 45%, rgba(255,138,0,0.15) 100%)",
        }}
      />

      {/* 🔥 GLOW */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(255,138,0,0.2) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* 🔥 CONTENT */}
      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ maxWidth: 700 }}>
          {/* TAG */}
          <Typography
            sx={{
              color: "#ff8a00",
              fontWeight: 700,
              letterSpacing: 4,
              fontSize: "0.8rem",
              textTransform: "uppercase",
            }}
          >
            Premium Turmeric Exporters from India
          </Typography>

          {/* HEADING */}
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 900,
              fontSize: { xs: "3rem", md: "5.2rem" },
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Exporting Pure <br />
            <Box
              component="span"
              sx={{
                color: "#ff8a00",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "8px",
                  left: 0,
                  width: "100%",
                  height: "12px",
                  background: "rgba(255,138,0,0.25)",
                  filter: "blur(8px)",
                  zIndex: -1,
                },
              }}
            >
              Halad & Turmeric
            </Box>
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.7,
              maxWidth: 580,
            }}
          >
            We specialize in exporting high-curcumin turmeric sourced directly
            from trusted Indian farms. Ensuring purity, quality, and timely
            global delivery for wholesalers and businesses worldwide.
          </Typography>

          {/* BUTTONS */}
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} pt={2}>
            <Button
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              sx={{
                bgcolor: "#ff8a00",
                px: 5,
                py: 1.8,
                borderRadius: "50px",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0 10px 30px rgba(255,138,0,0.4)",
                "&:hover": {
                  bgcolor: "#e67e00",
                  transform: "translateY(-3px)",
                },
              }}
            >
              Export Inquiry
            </Button>

            <Button
              variant="outlined"
              startIcon={<PlayArrowIcon />}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.4)",
                px: 5,
                py: 1.8,
                borderRadius: "50px",
                textTransform: "none",
                bgcolor: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(6px)",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              View Products
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
