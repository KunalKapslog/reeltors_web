import React from "react";
import { Box, Typography, Button } from "@mui/material";

function CommunityHubCTA() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        bgcolor: "#13120e",
        color: "white",
        padding: { xs: 2, md: 10 },
        borderRadius: 3,
        marginY: 4,
        width: { xs: "90%", sm: "80%", md: "100%" },
        mx: "auto",
      }}
    >
      {/* Left Section: Title and Subtitle */}
      <Box
        sx={{
          textAlign: { xs: "center", md: "left" },
        }}
      >
      <Typography
  variant="h4"
  fontWeight="bold"
  sx={{
    marginBottom: 1,
    fontSize: { xs: "1.5rem", md: "2rem" },
    fontFamily: 'Poppins, sans-serif', 
    fontWeight: 600,
  }}
>
  Explore Our Community Hub!
</Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: { xs: "1rem", md: "1.1rem" },
            fontFamily: "Gilroy-MediumItalic", 
            mt:2
          }}
        >
          Network with your local communities to
          <br />
           align in next line
        </Typography>
      </Box>

      {/* Right Section: Button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          color: "black",
          textTransform: "none",
          fontWeight: "bold",
          paddingY: 1.5,
          paddingX: { xs: 4, md: 6 },
          borderRadius: 2,
          boxShadow: "none",
          "&:hover": {
            bgcolor: "#f2f2f2",
          },
          alignSelf: { xs: "center", md: "flex-end" },
          marginTop: { xs: 3, md: 2 },
        }}
      >
        Explore Now
      </Button>
    </Box>
  );
}

export default CommunityHubCTA;
