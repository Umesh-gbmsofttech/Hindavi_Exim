import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
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
        position: "relative",
        background: "linear-gradient(180deg, #2a0b05 0%, #120301 100%)",
        color: "#fff",
        pt: 10,
        pb: 4,
        mt: "auto",
        overflow: "hidden",
      }}
    >
      {/* Top Glow */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #ff8a00, transparent)",
          opacity: 0.6,
        }}
      />

      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          background: "rgba(255,138,0,0.1)",
          filter: "blur(120px)",
          top: -150,
          right: -100,
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box>
              <Box
                sx={{
                  width: 40,
                  height: 3,
                  background:
                    "linear-gradient(90deg, #ff8a00, transparent)",
                  mb: 1.5,
                }}
              />

              <Typography sx={{ fontWeight: "bold", mb: 2, letterSpacing: 1 }}>
                HINDAVI EXIM
              </Typography>
            </Box>

            <Typography
              sx={{
                opacity: 0.7,
                lineHeight: 1.9,
                maxWidth: 320,
              }}
            >
              Empowering global trade through ethical sourcing and seamless
              logistics. Connecting businesses across borders with reliability
              and excellence.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              Quick Links
            </Typography>

            <Stack spacing={1.2}>
              {["About Us", "Services", "Projects", "Careers", "Contact"].map(
                (text) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase().replace(" ", "")}`}
                    underline="none"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.85rem",
                      transition: "0.25s",
                      "&:hover": {
                        color: "#ff8a00",
                        transform: "translateX(6px)",
                      },
                    }}
                  >
                    {text}
                  </Link>
                )
              )}
            </Stack>
          </Grid>

          {/* Expertise */}
          <Grid item xs={6} md={2}>
            <Typography sx={{ fontWeight: "bold", mb: 2 }}>
              Expertise
            </Typography>

            <Stack spacing={1.2}>
              {[
                "Import-Export",
                "Global Logistics",
                "Supply Chain",
                "Quality Control",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* RIGHT SECTION (FIXED) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: { md: "center", xs: "flex-start" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                p: 3,
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                position: "relative",
              }}
            >
              <Typography sx={{ fontWeight: "bold", mb: 1 }}>
                Stay Updated
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Subscribe to Udyami Maharashtra
              </Typography>

              {/* Input */}
              <Box
                sx={{
                  p: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(135deg, rgba(255,138,0,0.6), rgba(255,255,255,0.05))",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "8px",
                    background: "rgba(20,5,2,0.9)",
                    px: 1,
                  }}
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    style={{
                      flex: 1,
                      padding: "8px",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#fff",
                      fontSize: "0.8rem",
                    }}
                  />

                  <Box
                    component="button"
                    sx={{
                      px: 2,
                      py: 0.9,
                      borderRadius: "6px",
                      background:
                        "linear-gradient(135deg, #ff8a00, #ffb347)",
                      border: "none",
                      color: "#fff",
                      fontSize: "0.75rem",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow:
                          "0 8px 20px rgba(255,138,0,0.4)",
                      },
                    }}
                  >
                    Subscribe
                  </Box>
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.5)",
                  mb: 2,
                }}
              >
                Join 10,000+ entrepreneurs 🚀
              </Typography>

              {/* Social */}
              <Stack direction="row" spacing={1.5} mt={2.5}>
                {[FacebookIcon, LinkedInIcon, TwitterIcon, InstagramIcon].map(
                  (Icon, i) => (
                    <IconButton
                      key={i}
                      sx={{
                        width: 34,
                        height: 34,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #ff8a00, #ffb347)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  )
                )}
              </Stack>

              <Typography
                sx={{
                  mt: 1.5,
                  fontSize: "0.75rem",
                  opacity: 0.6,
                }}
              >
                info@hindaviexim.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            my: 6,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,138,0,0.5), transparent)",
          }}
        />

        {/* Bottom */}
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{ opacity: 0.6, fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Hindavi Exim. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;