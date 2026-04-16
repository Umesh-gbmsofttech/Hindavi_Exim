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

import exportImg from "../../assets/img4.webp";
import importImg from "../../assets/img5.webp";

const ServiceRow = ({ image, title, description, reverse }) => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Grid
        container
        alignItems="center"
        spacing={{ xs: 4, md: 7 }}
        direction={reverse ? "row-reverse" : "row"}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              borderRadius: 6,
              overflow: "hidden",
              boxShadow: "0 22px 52px rgba(47,23,13,0.12)",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: { xs: 280, md: 430 },
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ maxWidth: 540, mx: { xs: "auto", md: reverse ? 0 : "auto" } }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.85rem", md: "2.4rem" },
                color: "primary.main",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: "1rem",
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              {description}
            </Typography>

            <Button variant="contained" color="secondary">
              Explore Service
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const ServicesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 9, md: 13 },
        background: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" mb={{ xs: 6, md: 8 }} alignItems="center">
          <Chip label="Our Services" color="secondary" sx={{ fontWeight: 700 }} />
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "primary.main",
              maxWidth: 760,
            }}
          >
            Services aligned around smoother export execution and better buyer confidence.
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              fontSize: "1.05rem",
              lineHeight: 1.9,
            }}
          >
            We present our services in a simpler structure so visitors can
            quickly understand what Hindavi Exim actually helps with and why the
            process feels more dependable.
          </Typography>
        </Stack>

        <ServiceRow
          image={exportImg}
          title="Sourcing and export support built around practical trade needs."
          description="We help align products, communication, and export readiness so buyers can move forward with clearer expectations and stronger confidence."
        />

        <ServiceRow
          image={importImg}
          reverse
          title="Documentation, shipment coordination, and responsive execution."
          description="From planning to dispatch, our service approach is designed to reduce friction, improve visibility, and support more reliable cross-border movement."
        />
      </Container>
    </Box>
  );
};

export default ServicesSection;
