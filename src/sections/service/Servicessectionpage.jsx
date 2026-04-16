import React from "react";
import { Grid, Typography, Box, Card, CardContent, Stack, Chip } from "@mui/material";
import InventoryIcon from "@mui/icons-material/Inventory";
import SailingIcon from "@mui/icons-material/Sailing";
import PolicyIcon from "@mui/icons-material/Policy";

const serviceList = [
  {
    title: "Product Sourcing",
    icon: <InventoryIcon />,
    desc: "Practical sourcing support for buyers looking for dependable product alignment, supplier coordination, and readiness before dispatch.",
  },
  {
    title: "Shipment Coordination",
    icon: <SailingIcon />,
    desc: "Support across planning, timelines, and shipment movement so each order progresses with clearer expectations and fewer surprises.",
  },
  {
    title: "Documentation Support",
    icon: <PolicyIcon />,
    desc: "Export paperwork and trade handling aligned carefully to reduce friction and help transactions move more smoothly.",
  },
];

const ServicesSectionPage = () => (
  <Box sx={{ py: { xs: 7, md: 9 } }}>
    <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
      <Chip label="Core Services" color="secondary" sx={{ fontWeight: 700 }} />
      <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "primary.main" }}>
        The support buyers expect from a serious export partner.
      </Typography>
      <Typography sx={{ maxWidth: 720, color: "text.secondary", lineHeight: 1.85 }}>
        These service blocks are intentionally simple and clear. The goal is to
        communicate capability with confidence, not clutter.
      </Typography>
    </Stack>

    <Grid container spacing={3}>
      {serviceList.map((item) => (
        <Grid key={item.title} size={{ xs: 12, md: 4 }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              borderRadius: 5,
              border: "1px solid rgba(93,51,29,0.08)",
              boxShadow: "0 18px 40px rgba(47,23,13,0.06)",
            }}
          >
            <CardContent sx={{ p: 3.5 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 3,
                  bgcolor: "rgba(217,137,54,0.12)",
                  color: "secondary.dark",
                  mb: 2.5,
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: "primary.main" }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServicesSectionPage;
