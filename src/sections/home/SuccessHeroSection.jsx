import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Grid, Button, Stack, Chip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

import Img1 from "../../assets/img1.webp";
import Img2 from "../../assets/img2.webp";
import Img3 from "../../assets/img3.webp";
import Img4 from "../../assets/img4.webp";
import Img5 from "../../assets/img5.webp";
import Img6 from "../../assets/img6.webp";

const images = [Img1, Img2, Img3, Img4, Img5, Img6];

const SuccessHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        py: { xs: 8, md: 13 },
        background: "linear-gradient(135deg, #ffffff 0%, #f7f1eb 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ maxWidth: 540 }}>
                <Chip label="Why It Feels More Credible" color="secondary" sx={{ mb: 2, fontWeight: 700 }} />
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: "primary.main",
                    lineHeight: 1.15,
                    mb: 3,
                    fontSize: { xs: "2rem", md: "3rem" },
                  }}
                >
                  Stronger structure, calmer spacing, and clearer messaging across the site.
                </Typography>

                <Typography
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    lineHeight: 1.85,
                  }}
                >
                  This section now supports the updated brand direction rather
                  than introducing unrelated storylines. It reinforces trust by
                  staying relevant to Hindavi Exim's actual presentation goals.
                </Typography>

                <Stack spacing={1.7}>
                  {[
                    "Cleaner alignment between content and imagery",
                    "More focused visual hierarchy",
                    "Reduced visual noise and better readability",
                  ].map((text) => (
                    <Box key={text} sx={{ display: "flex", gap: 1.5 }}>
                      <CheckCircleOutlineOutlined sx={{ color: "secondary.main" }} />
                      <Typography sx={{ fontWeight: 600 }}>{text}</Typography>
                    </Box>
                  ))}
                </Stack>

                <Button variant="contained" color="secondary" sx={{ mt: 4 }}>
                  View Services
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Hindavi Exim presentation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      borderRadius: "28px",
                      boxShadow: "0 24px 54px rgba(47,23,13,0.14)",
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
