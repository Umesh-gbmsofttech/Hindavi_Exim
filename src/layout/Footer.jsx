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
        pt: 10,   // increased top space
        pb: 5,    // increased bottom space
      }}
    >
      <Container maxWidth="lg">
        
        <Grid container spacing={15}> {/* increased section gap */}

          {/* BRAND */}
          <Grid item xs={12} md={4}>
            <Box sx={{ pr: { md: 2 } }}> {/* inner spacing */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 3 }} // more gap
              >
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
                Empowering global trade through ethical sourcing and seamless logistics.
                Connecting businesses across borders with reliability and excellence.
              </Typography>
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={6} md={2}>
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: 3 }}>
                Quick Links
              </Typography>

              <Stack spacing={1.5}> {/* increased item gap */}
                {["About Us", "Services", "Contact"].map((text) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase().replace(" ", "")}`}
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
                    {text}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* EXPERTISE */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: 3 }}>
                Expertise
              </Typography>

              <Stack spacing={1.5}>
                {[
                  "Import-Export",
                  "Global Logistics",
                  "Supply Chain",
                  "Quality Control",
                ].map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontSize: "14px",
                      opacity: 0.85,
                      transition: "0.3s",
                      "&:hover": {
                        opacity: 1,
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* SOCIAL */}
          <Grid item xs={12} md={3}>
            <Box>
              <Typography sx={{ fontWeight: "bold", mb: 3 }}>
                Follow Us
              </Typography>

              <Stack direction="row" spacing={2}> {/* increased icon gap */}
                {[FacebookIcon, LinkedInIcon, TwitterIcon, InstagramIcon].map(
                  (Icon, i) => (
                    <IconButton
                      key={i}
                      sx={{
                        color: "white",
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-3px) scale(1.1)",
                          color: "#FFD700",
                        },
                      }}
                    >
                      <Icon />
                    </IconButton>
                  )
                )}
              </Stack>

              <Box sx={{ mt: 3 }}> {/* spacing before contact */}
                <Typography variant="body2" sx={{ opacity: 0.85, mb: 1 }}>
                  Email: info@hindaviexim.com
                </Typography>

                <Typography variant="body2" sx={{ opacity: 0.85 }}>
                  Phone: +91 (022) 1234-5678
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* DIVIDER */}
        <Divider sx={{ my: 5, bgcolor: "rgba(255,255,255,0.15)" }} />

        {/* COPYRIGHT */}
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