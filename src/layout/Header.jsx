import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/Hindavi.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "center" }}>
        {/* NAV WRAPPER */}
        <Box
          sx={{
            width: scrolled ? "75%" : "100vw",
            maxWidth: scrolled ? "900px" : "100vw",

            px: scrolled ? 3 : 5,
            py: scrolled ? 1 : 2,

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            borderRadius: scrolled ? "50px" : "0px",

            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",

            border: "1px solid rgba(255,255,255,0.15)",

            boxShadow: scrolled
              ? "0 8px 30px rgba(0,0,0,0.18)"
              : "0 4px 15px rgba(0,0,0,0.10)",

            transition: "all 0.4s ease",
          }}
        >
          {/* LOGO (INTEGRATED STYLE) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              padding: "4px 8px",
              borderRadius: "12px",
              transition: "0.3s ease",

              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Hindavi Exim Logo"
              sx={{
                height: scrolled ? 50 : 70,
                filter: "drop-shadow(0px 2px 6px rgba(0,0,0,0.25))",
                opacity: 0.95,
                transition: "0.3s ease",
              }}
            />
          </Box>

          {/* LINKS */}
          <Stack direction="row" spacing={3}>
            {["Home", "About", "Services"].map((item) => (
              <Button
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                sx={{
                  color: "#000",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>

          {/* CTA */}
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              borderRadius: "30px",
              px: 3,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;