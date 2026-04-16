import React from "react";
import { Grid, Card, CardContent, Typography, Container, Box } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const services = [
  {
    title: "Global Sourcing",
    desc: "Aligned sourcing support for buyers looking for dependable product readiness and coordination.",
    icon: <PublicIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Freight Coordination",
    desc: "Shipment planning across air, sea, and land logistics with clearer execution support.",
    icon: <LocalShippingIcon fontSize="large" color="secondary" />,
  },
  {
    title: "Quality Assurance",
    desc: "Focused quality discipline and export handling to improve confidence before dispatch.",
    icon: <VerifiedUserIcon fontSize="large" color="secondary" />,
  },
];

const ServicesSection = () => (
  <Container sx={{ py: 10 }}>
    <Typography variant="h3" textAlign="center" gutterBottom sx={{ color: "primary.main" }}>
      Our Expertise
    </Typography>
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {services.map((s) => (
        <Grid size={{ xs: 12, md: 4 }} key={s.title}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              textAlign: "center",
              borderRadius: 5,
              border: "1px solid rgba(93,51,29,0.08)",
              boxShadow: "0 16px 36px rgba(47,23,13,0.05)",
            }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Box sx={{ mb: 2 }}>{s.icon}</Box>
              <Typography variant="h5" gutterBottom sx={{ color: "primary.main", fontWeight: 700 }}>
                {s.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                {s.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServicesSection;
