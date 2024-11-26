import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {

  const navigate = useNavigate();
  return (
    <Box 
      sx={{
        bgcolor: "#1E1B0C",
        borderRadius: "8px",
        padding: "12px",
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
        <Avatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: "#FFB74D",
            marginRight: "16px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#1E1B0C",
            }}
          >
            👤
          </Typography>
        </Avatar>

        <Box>
          <Typography
            variant="h7"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginBottom: "4px",
            }}
          >
            Hello,
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#FFFFFF",
              fontSize: "10px",
              fontWeight:200
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

          onClick={() => navigate("/login")}
        >
          Login / Signup
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderSection;
