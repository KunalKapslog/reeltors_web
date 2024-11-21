import React, { useState } from "react";
import { Box, Typography,Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CSSTransition } from "react-transition-group"; 
import "./action.css"; 
import arrowImage from "../../assets/images/arrowForward.png";

function ActionCards() {
  const [showInitialContent, setShowInitialContent] = useState(true);

  const handleRequestCallClick = () => {
    toast.success("Your message has been submitted!");
    setShowInitialContent(false);
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="stretch"
      gap={4}
      p={4}
      bgcolor="#f5f5f5"
    >
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Left Card */}
      <Box
        sx={{
          width: { xs: "100%", sm: "48%", md: "500px" },
          p: 3,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Conditional Rendering for Initial Content */}
        <CSSTransition
          in={showInitialContent}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 500,
                color: "#000000",
                mb: 1,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Need assistance to find your dream place
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              sx={{
                justifyContent: { xs: "center", sm: "flex-start" },
                flexWrap: "wrap",
                cursor: "pointer",
              }}
              onClick={handleRequestCallClick} // Handle click event
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Gilroy, sans-serif",
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "textPrimary",
                }}
              >
                Request for a call
              </Typography>

              <img
                src={arrowImage}
                alt="Arrow Image"
                style={{
                  width: 100,
                  height: 20,
                  marginLeft: 8,
                }}
              />
            </Box>
          </Box>
        </CSSTransition>

        {/* Conditional Rendering for Success Message */}
        <CSSTransition
          in={!showInitialContent}
          timeout={300}
          classNames="slide"
          unmountOnExit
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 600,
                color: "green",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Your message has been submitted! We will contact you soon.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 400,
                color: "gray",
                textAlign: { xs: "center", sm: "left" },
                mt: 1,
              }}
            >
              You requested a call submission.
            </Typography>
          </Box>
        </CSSTransition>
      </Box>

      {/* Right Card */}
      <Box
        sx={{
          width: { xs: "100%", sm: "48%", md: "500px" },
          p: 3,
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(180deg, #FF3131, #991D1D)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            textAlign: { xs: "center", sm: "left" },
            ml: { sm: 8 },
            mt: 1,
          }}
        >
          <Typography variant="body1" color="inherit" mb={1}>
            Market your property like a pro
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="inherit" mb={2}>
            Post your property
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#FFC107",
              color: "#000",
              borderRadius: "20px",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#FFD54F",
              },
              fontFamily: "Gilroy, Arial, sans-serif",
              fontStyle: "italic",
              fontSize: "16px",
            }}
          >
            Post Property
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ActionCards;
