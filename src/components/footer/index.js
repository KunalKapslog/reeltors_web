import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      sx={{ background: "#F5F5F5" }}
    >
      {/* Main Content */}
      <Box flexGrow={1}>
        {/* Links Section */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }} 
          justifyContent={{ xs: "center", sm: "center" }}
          flexWrap="wrap"
          mb={2}
          gap={{ xs: 2, lg: 6 }} 
        >
          {[
            "About Us",
            "Careers",
            "Terms & Condition",
            "Privacy Policy",
            "Report a problem",
          ].map((item, index) => (
            <Link
              href="#"
              key={index}
              underline="none"
              color="textPrimary"
              fontSize="14px"
              textAlign="center" 
            >
              {item}
            </Link>
          ))}
        </Box>

        {/* Divider */}
        <Box borderTop="1px solid #ccc" mx="auto" width="80%" my={2} />

        {/* App Download Section */}
        <Box textAlign="center" mb={3}>
          <Typography variant="body1" mb={1}>
            Download the app
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ height: "40px" }}
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              style={{ height: "40px" }}
            />
          </Box>
        </Box>

        {/* Social Media Icons */}
        <Box textAlign="center" mb={3}>
          <Typography variant="body1" mb={1}>
            Connect with us
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <IconButton href="#" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton href="#" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton href="#" aria-label="YouTube">
              <YouTube />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box bgcolor="#333" color="#fff" py={2}>
        <Typography variant="caption" textAlign="center" display="block">
          All trademarks, logos, and names are properties of their respective
          owners. All Rights Reserved. © Copyright 2024.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
