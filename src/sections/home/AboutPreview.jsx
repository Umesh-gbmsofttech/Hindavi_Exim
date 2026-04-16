import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import turmericImage from "../../assets/export.jpg";

const AboutPreview = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        background: "#f8f8f8", // 🔥 light grey like reference
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            gap: { xs: 6, md: 10 }, // 🔥 spacing between image & content
          }}
        >
          {/* LEFT IMAGE */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  maxWidth: 720,
                }}
              >
                <Box
                  component="img"
                  src={turmericImage}
                  alt="Export"
                  sx={{
                    width: "100%",
                    height: "480px",
                    borderRadius: "24px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  }}
                />

                {/* Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    bgcolor: "#fff",
                    px: 3,
                    py: 1.2,
                    borderRadius: "14px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#ff8a00",
                      fontSize: "0.9rem",
                    }}
                  >
                    15+ Years
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT CONTENT */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Stack spacing={3} maxWidth={560}>
                
                {/* TAG */}
                <Typography
                  sx={{
                    color: "#ff8a00",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    letterSpacing: 2,
                  }}
                >
                  ABOUT OUR COMPANY
                </Typography>

                {/* HEADING */}
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    lineHeight: 1.2,
                    color: "#222",
                  }}
                >
                  Exporting Premium <br />
                  <Box component="span" sx={{ color: "#ff8a00" }}>
                    Turmeric Worldwide
                  </Box>
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#666",
                    lineHeight: 1.8,
                    maxWidth: 500,
                  }}
                >
                  We export high-quality turmeric sourced directly from Indian
                  farms. Our focus is on purity, consistency, and global quality
                  standards.
                  <br />
                  <br />
                  With a strong supply chain, we ensure reliable delivery and
                  competitive pricing worldwide.
                </Typography>

                {/* FEATURES INLINE */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={3}
                >
                  {[
                    "High-Curcumin Quality",
                    "Direct Farm Sourcing",
                    "Global Shipping",
                    "Quality Certified",
                  ].map((item, i) => (
                    <Stack
                      key={i}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <CheckCircleIcon
                        sx={{ color: "#ff8a00", fontSize: 20 }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: "#333",
                        }}
                      >
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                {/* BUTTON */}
                <Box pt={2}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ff8a00",
                      px: 5,
                      py: 1.6,
                      borderRadius: "40px",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      boxShadow: "0 12px 30px rgba(255,138,0,0.35)",
                      "&:hover": {
                        bgcolor: "#ff9f33",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    EXPLORE PRODUCTS
                  </Button>
                </Box>

              </Stack>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPreview;