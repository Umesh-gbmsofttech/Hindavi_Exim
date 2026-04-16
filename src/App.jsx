import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";

const theme = createTheme({
  palette: {
    primary: { main: "#4f2815" },
    secondary: { main: "#d45637" },
    background: { default: "#ffffff" },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800 },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Header />

          {/* Pages */}
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;