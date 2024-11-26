import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "white",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "600px",
          bgcolor: "#ffffff",
          borderRadius: 3,
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
          padding: 2,
          position: "relative",
        }}
      >
        {/* Close Icon */}
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={() => navigate("/")}
        >
          <CloseIcon sx={{ color: "#333333", fontSize: "20px" }} />
        </IconButton>

        {/* Back to Login Link */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mb: 3,
          }}
          onClick={() => navigate("/login")}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#333333",
              cursor: "pointer",
              marginLeft: 1,
            }}
          >
            ←
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#333333",
              cursor: "pointer",
              fontWeight: 200,
              ml: 1,
            }}
          >
            Go back to Login
          </Typography>
        </Box>
        <Box p={{ xs: 2, sm: 3 }}>

          {/* Heading */}
          <Typography
            sx={{
              color: "#1E1B0C",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: "16px", sm: "18px" },
              wordBreak: "break-word", 
              lineHeight: 1.5,
            }}
          >
            Create Account
          </Typography>

          {/* Name Input */}
          <TextField
            fullWidth
            placeholder="Enter your name"
            variant="outlined"
            sx={{
              marginBottom: 2,
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                opacity: 0.8,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "#555555" }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
              },
            }}
          />

          {/* Email Input */}
          <TextField
            fullWidth
            placeholder="Enter your Email Id"
            variant="outlined"
            sx={{
              marginBottom: 2,
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                opacity: 0.8,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ color: "#555555" }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
              },
            }}
          />

          {/* Password Input */}
          <TextField
            fullWidth
            placeholder="Enter Password"
            type="password"
            variant="outlined"
            sx={{
              marginBottom: 2,
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                opacity: 0.8,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "#555555" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <VisibilityOffIcon sx={{ color: "#555555" }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
              },
            }}
          />

          {/* Confirm Password Input */}
          <TextField
            fullWidth
            placeholder="Confirm your Password"
            type="password"
            variant="outlined"
            sx={{
              marginBottom: 3,
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                opacity: 0.8,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ color: "#555555" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <VisibilityOffIcon sx={{ color: "#555555" }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
              },
            }}
          />

          {/* Sign Up Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              width: { xs: "100%", sm: "50%" },
              bgcolor: "#ff3d00",
              color: "#ffffff",
              textTransform: "none",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              borderRadius: 2,
              paddingY: 1,
              mb: 3,
              mx: "auto",
              display: "block",
              ":hover": {
                  bgcolor: "#d32f2f",
              },
            }}
          >
            Sign Up
          </Button>

          {/* Terms and Conditions */}
          <Typography
            align="center"
            sx={{
              color: "#333333",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "12px",
            }}
          >
            By continuing, you agree to the
            <Link
              href="#"
              sx={{ color: "#ff3d00", textDecoration: "none", fontWeight: 500 }}
            >
              Terms of Service
            </Link>
            , and{" "}
            <Link
              href="#"
              sx={{ color: "#ff3d00", textDecoration: "none", fontWeight: 500 }}
            >
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>

    </Box>
  );
};

export default SignUpPage;
