import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { EmailIcon,LockOutlinedIcon,VisibilityOffIcon,AppleIcon,GoogleIcon } from "../../../assets/icons";


const LoginPage = ({ switchToSignup, onClose }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!form.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      tempErrors.email = "Invalid email format.";
    if (!form.password) tempErrors.password = "Password is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", form);
      navigate('/')
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: "90%",
          // maxWidth: "600px",
          // bgcolor: "#ffffff",
          // borderRadius: 3,
          // boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
          padding: 2,
          position: "relative",
        }}
      >
        {/* Close Icon */}
        <IconButton
          sx={{ position: "absolute", top: 10, left: 8 }}
          onClick={onClose}

          aria-label="Close Login Page"
        >
          <CloseIcon sx={{ color: "#333333", fontSize: "20px" }} />
        </IconButton>

        {/* Create New Account Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            mb: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#333333",
              cursor: "pointer",
              fontWeight: 200,
            }}
            onClick={switchToSignup} 
          >
            Create New Account
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#333333",
              cursor: "pointer",
              marginLeft: 1,
            }}
          >
            →
          </Typography>
        </Box>

        {/* Form Section */}
        <Box px={{ xs: 2, sm: 5 }} py={{ xs: 2, sm: 2 }}>
          {/* Heading */}
          <Typography
            py={2}
            sx={{
              color: "#1E1B0C",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: "16px", sm: "20px" },
              wordBreak: "break-word",
              textAlign: "center",
            }}
          >
            Enter your email or phone number to log in
          </Typography>

          {/* Email Input */}
          <TextField
            fullWidth
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email Id"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
            sx={{
              marginBottom: 2,
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                opacity: 0.8,
              },

              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px white inset", 
                WebkitTextFillColor: "black", 
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon height={20} width={20}/>
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
            name="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password}
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
                  <LockOutlinedIcon height={20} width={20}/>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <VisibilityOffIcon sx={{ color: "#555555" }} />
                    ) : (
                      <VisibilityOffIcon sx={{ color: "#555555" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
              },
            }}
          />

          {/* Forgot Password */}
          <Typography
            align="left"
            variant="body2"
            sx={{
              color: "#565030",
              cursor: "pointer",
              marginBottom: 3,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
            }}
          >
            Forgot password?
          </Typography>

          {/* Login Button */}
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: { xs: "100%", sm: "50%" },
              bgcolor: "#FF3131",
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
            Login Now
          </Button>

          {/* Divider */}
          <Divider
            sx={{
              color: "#1E1B0C",
              mb: 3,
              opacity: 0.8,
              fontSize: { xs: "12px", sm: "14px" },
            }}
          >
            or continue using
          </Divider>

          {/* Social Login Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <Button
              fullWidth
              startIcon={<AppleIcon height={30} width={30}/>}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                paddingY: 1.2,
                ":hover": {
                  borderColor: "#999999",
                },
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                color: "black",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              Login with Apple
            </Button>
            <Button
              fullWidth
              startIcon={<GoogleIcon height={30} width={30}/>}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                paddingY: 1.2,
                ":hover": {
                  borderColor: "#999999",
                },
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                color: "black",
              }}
            >
              Login with Google
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
