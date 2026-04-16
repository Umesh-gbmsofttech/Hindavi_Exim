import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, CheckCircleOutlineOutlined } from "@mui/icons-material";

// Import all images
import Img1 from "../../assets/img1.webp";
import Img2 from "../../assets/img2.webp";
import Img3 from "../../assets/img3.webp";
import Img4 from "../../assets/img4.webp";
import Img5 from "../../assets/img5.webp";
import Img6 from "../../assets/img6.webp";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const SuccessHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 15 },
        background: "linear-gradient(135deg, #ffffff 0%, #fdf5f2 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="space-between">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ maxWidth: 520 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#ff8a00",
                    fontWeight: 900,
                    letterSpacing: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <TrendingUp /> Udyami Success Stories
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    color: "#2b140b",
                    lineHeight: 1.2,
                    mb: 3,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  Achieving{" "}
                  <span style={{ color: "#ff8a00" }}>₹1.5 Crore</span> Turnover
                </Typography>

                <Typography
                  sx={{
                    mb: 4,
                    color: "#4e2616",
                    lineHeight: 1.7,
                    borderLeft: "4px solid #ff8a00",
                    pl: 2,
                  }}
                >
                  This milestone was achieved through guidance of
                  <b> Dr. Omkar Hari Mali</b> and <b>Udyami</b>.
                </Typography>

                <Stack spacing={2}>
                  {[
                    "Expert mentorship",
                    "Proven frameworks",
                    "Scalable strategies",
                  ].map((text, i) => (
                    <Box key={i} sx={{ display: "flex", gap: 1.5 }}>
                      <CheckCircleOutlineOutlined sx={{ color: "#4caf50" }} />
                      <Typography sx={{ fontWeight: 600 }}>
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    bgcolor: "#ff8a00",
                    px: 4,
                    py: 1.8,
                    borderRadius: "30px",
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#e67e00" },
                  }}
                >
                  Start Your Journey
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT IMAGE (AUTO CHANGE) */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                  position: "relative",
                  height: "100%",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: "100%",
                      maxWidth: "480px",
                      borderRadius: "20px",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                    }}
                  />
                </AnimatePresence>
              </Box>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default SuccessHeroSection;