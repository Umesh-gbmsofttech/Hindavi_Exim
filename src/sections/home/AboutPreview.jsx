import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import aboutImage from "../../assets/img3.webp";

const AboutPreview = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 9, md: 13 },
        background: "linear-gradient(180deg, #f7f1eb 0%, #fffdfb 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 7 }}
          alignItems="center"
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 6,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(47,23,13,0.14)",
                }}
              >
                <Box
                  component="img"
                  src={aboutImage}
                  alt="Hindavi Exim sourcing and export operations"
                  sx={{
                    width: "100%",
                    height: { xs: 320, md: 520 },
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 24,
                    bottom: 24,
                    px: 2.5,
                    py: 1.4,
                    borderRadius: 4,
                    bgcolor: "rgba(255,255,255,0.92)",
                    boxShadow: "0 12px 28px rgba(47,23,13,0.12)",
                  }}
                >
                  <Typography sx={{ fontWeight: 800, color: "primary.main" }}>
                    Quality-led export approach
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <Stack spacing={3} sx={{ maxWidth: 560 }}>
                <Chip
                  label="About Hindavi Exim"
                  color="secondary"
                  sx={{ width: "fit-content", fontWeight: 700 }}
                />

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2rem", md: "3rem" },
                    lineHeight: 1.12,
                    color: "primary.main",
                  }}
                >
                  A more dependable way to present Indian export capability.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "text.secondary",
                    lineHeight: 1.9,
                  }}
                >
                  Hindavi Exim is positioned around straightforward trade
                  communication, disciplined sourcing, and export execution that
                  feels organized from inquiry through dispatch.
                </Typography>

                <Stack spacing={1.6}>
                  {[
                    "Clearer buyer communication",
                    "Supply and shipment coordination",
                    "Documentation support that reduces friction",
                    "A more trustworthy presentation of capabilities",
                  ].map((item) => (
                    <Stack
                      key={item}
                      direction="row"
                      spacing={1.4}
                      alignItems="center"
                    >
                      <CheckCircleIcon sx={{ color: "secondary.main", fontSize: 20 }} />
                      <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                <Box pt={1}>
                  <Button variant="contained" color="secondary">
                    Learn More About Us
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
