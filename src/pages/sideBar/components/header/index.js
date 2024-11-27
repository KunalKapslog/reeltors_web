import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useLoginModal } from "../../../../context";
import {AvatarIcon } from "../../../../assets/icons";

const HeaderSection = () => {

  const { openLoginModal } = useLoginModal();

  return (
    <Box 
      sx={{
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Avatar and Text Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", 
          marginLeft: "16px",
        }}
      >
    <Box mt={2} mr={2}>
    <AvatarIcon/>

    </Box>



        <Box>
          <Typography
            variant="h7"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginBottom: "4px",
              fontStyle: "italic",
              fontFamily: "Gilroy-BlackItalic, sans-serif",
            }}
          >
            Hello,
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Gilroy-Light, sans-serif", 
              color: "#FFFFFF",
              fontSize: "10px",
              fontWeight: 200,
            }}
          >
            Get personalised property that meet your requirement.
          </Typography>
        </Box>
      </Box>

      {/* Login/Signup Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end", 
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FF3D00",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "10px",
            padding: "8px 16px",
            borderRadius: "8px",
            ":hover": {
              bgcolor: "#D32F2F",
            },

          }}

          onClick={openLoginModal}

          // onClick={() => navigate("/login")}
        >
          Login / Signup
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderSection;
