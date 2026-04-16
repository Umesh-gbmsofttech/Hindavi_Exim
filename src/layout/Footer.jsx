import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        pt: 10,
        pb: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ pr: { md: 2 } }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>
                HINDAVI EXIM
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  opacity: 0.85,
                  lineHeight: 1.9,
                  maxWidth: 340,
                }}
              >
                Hindavi Exim presents Indian export capability with a cleaner,
                more dependable digital experience centered on clarity and
                confidence.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontWeight: "bold", mb: 3 }}>Quick Links</Typography>
            <Stack spacing={1.5}>
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="hover"
                  sx={{
                    color: "inherit",
                    opacity: 0.85,
                    fontSize: "14px",
                    transition: "0.3s",
                    "&:hover": {
                      opacity: 1,
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography sx={{ fontWeight: "bold", mb: 3 }}>Focus Areas</Typography>
            <Stack spacing={1.5}>
              {[
                "Product sourcing",
                "Shipment coordination",
                "Documentation support",
                "Buyer communication",
              ].map((item) => (
                <Typography key={item} sx={{ fontSize: "14px", opacity: 0.85 }}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ fontWeight: "bold", mb: 3 }}>Follow Us</Typography>

            <Stack direction="row" spacing={2}>
              {[FacebookIcon, LinkedInIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    color: "white",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-3px) scale(1.1)",
                      color: "#f3c178",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Stack>

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" sx={{ opacity: 0.85, mb: 1 }}>
                Email: info@hindavi.in
              </Typography>

              <Typography variant="body2" sx={{ opacity: 0.85 }}>
                Website: https://hindavi.in/
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, bgcolor: "rgba(255,255,255,0.15)" }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Hindavi Exim. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
