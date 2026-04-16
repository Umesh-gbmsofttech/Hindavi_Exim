import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";

import exportImg from "../../assets/export.jpg";
import importImg from "../../assets/import.jpg";

/* =========================
   💎 PREMIUM SPLIT SECTION
========================= */
const ServiceRow = ({ image, title, description, reverse }) => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Grid
        container
        alignItems="center"
        spacing={6}
        direction={reverse ? "row-reverse" : "row"}
      >
        {/* IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: { xs: 260, md: 420 },
                objectFit: "cover",
                transition: "transform 0.6s ease",
              }}
            />

            {/* subtle overlay effect */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
                opacity: 0,
                transition: "0.4s",
              }}
            />

            {/* hover effect */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                "&:hover img": {
                  transform: "scale(1.06)",
                },
                "&:hover div": {
                  opacity: 1,
                },
              }}
            />
          </Box>
        </Grid>

        {/* CONTENT */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 520,
              mx: { xs: "auto", md: reverse ? "0" : "auto" },
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.7rem", md: "2.2rem" },
                color: "#111",
                mb: 2,
                lineHeight: 1.3,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#666",
                fontSize: "1rem",
                lineHeight: 1.9,
                mb: 4,
              }}
            >
              {description}
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: "40px",
                px: 5,
                py: 1.4,
                fontWeight: 600,
                textTransform: "none",
                background: "#000",
                fontSize: "0.95rem",

                "&:hover": {
                  background: "#222",
                },
              }}
            >
              Learn More →
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

/* =========================
   🌍 SERVICES SECTION
========================= */
const ServicesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        background: "#f6f7fb",
      }}
    >
      <Container maxWidth="lg">
        {/* HEADER */}
        <Stack spacing={2} textAlign="center" mb={12}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "3rem" },
              color: "#111",
            }}
          >
            Our Services
          </Typography>

          <Typography
            sx={{
              color: "#666",
              maxWidth: 650,
              mx: "auto",
              fontSize: "1.05rem",
              lineHeight: 1.9,
            }}
          >
            Seamlessly connecting global markets, we specialize in efficient
            import and export of goods, ensuring reliability, speed, and
            precision every step of the way.
          </Typography>
        </Stack>

        {/* SECTION 1 → IMAGE LEFT, CONTENT RIGHT */}
        <ServiceRow
          image={exportImg}
          title="Ready to Elevate Your Business with Premium Exports?"
          description="At Avadis, we don't just export products; we deliver excellence and reliability to your doorstep. Whether you need high-quality copper wire rods, durable bitumen, or fresh fruits and vegetables, our team ensures seamless and timely delivery."
        />

        {/* SECTION 2 → CONTENT LEFT, IMAGE RIGHT */}
        <ServiceRow
          image={importImg}
          reverse
          title="Are you ready to transform your business through importing high-quality goods?"
          description="At Avadis Tejarat Mahan, we provide reliable import services, delivering top-quality products directly to your business. From sourcing premium raw materials to supplying electronics, we ensure efficiency and quality."
        />
      </Container>
    </Box>
  );
};

export default ServicesSection;