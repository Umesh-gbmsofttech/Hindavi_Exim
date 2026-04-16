import React from "react";
import { Box, Typography, Card, CardContent, Grid, Stack, Chip } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const locations = [
  {
    title: "Sourcing Network",
    text: "Vendor and product coordination managed through trusted sourcing relationships in India.",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    title: "Export Coordination",
    text: "Shipment planning, documentation flow, and movement updates aligned for international buyers.",
    icon: <PublicOutlinedIcon />,
  },
  {
    title: "Partner Support",
    text: "Responsive communication for inquiries, order progress, and trade coordination requirements.",
    icon: <SupportAgentOutlinedIcon />,
  },
];

const OfficeLocations = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
        <Chip label="Operational Strength" color="secondary" sx={{ fontWeight: 700 }} />
        <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "primary.main" }}>
          Structured to support dependable export execution.
        </Typography>
        <Typography sx={{ color: "text.secondary", lineHeight: 1.8, maxWidth: 760 }}>
          Instead of overloading the page with decorative motion, we focus on
          the practical capabilities that make Hindavi Exim easier to trust and
          easier to work with.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {locations.map((loc) => (
          <Grid key={loc.title} size={{ xs: 12, md: 4 }}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                borderRadius: 5,
                border: "1px solid rgba(93,51,29,0.08)",
                boxShadow: "0 16px 40px rgba(47,23,13,0.06)",
              }}
            >
              <CardContent sx={{ p: 3.5 }}>
                <Box
                  sx={{
                    mb: 2.2,
                    width: 56,
                    height: 56,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 3,
                    bgcolor: "rgba(217,137,54,0.12)",
                    color: "secondary.dark",
                  }}
                >
                  {loc.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 1.2, color: "primary.main" }}>
                  {loc.title}
                </Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.85 }}>
                  {loc.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OfficeLocations;
