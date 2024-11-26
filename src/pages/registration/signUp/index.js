import React, { useState } from "react";
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
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const PasswordField = ({
  placeholder,
  showPassword,
  toggleShowPassword,
  value,
  onChange,
  error,
}) => (
  <TextField
    fullWidth
    placeholder={placeholder}
    type={showPassword ? "text" : "password"}
    value={value}
    onChange={onChange}
    error={!!error}
    helperText={error}
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
          <IconButton onClick={toggleShowPassword}>
            {showPassword ? (
              <VisibilityIcon sx={{ color: "#555555" }} />
            ) : (
              <VisibilityOffIcon sx={{ color: "#555555" }} />
            )}
          </IconButton>
        </InputAdornment>
      ),
      sx: { borderRadius: 2 },
    }}
  />
);

const SignUpPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!form.name) tempErrors.name = "Name is required.";
    if (!form.email) tempErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      tempErrors.email = "Invalid email address.";
    if (!form.password) tempErrors.password = "Password is required.";
    if (!form.confirmPassword)
      tempErrors.confirmPassword = "Confirm your password.";
    else if (form.password !== form.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted successfully!", form);
    }
  };

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
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            variant="outlined"
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
            name="email"
            placeholder="Enter your Email Id"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
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
                  <EmailOutlinedIcon sx={{ color: "#555555" }} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
              },
            }}
          />

          {/* Password Field */}
          <PasswordField
            placeholder="Enter Password"
            showPassword={showPassword}
            toggleShowPassword={() => setShowPassword((prev) => !prev)}
            value={form.password}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, password: e.target.value }))
            }
            error={errors.password}
          />

          {/* Confirm Password Field */}
          <PasswordField
            placeholder="Confirm Password"
            showPassword={showConfirmPassword}
            toggleShowPassword={() =>
              setShowConfirmPassword((prev) => !prev)
            }
            value={form.confirmPassword}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            error={errors.confirmPassword}
          />

          {/* Sign Up Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
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
            By continuing, you agree to the{" "}
            <Link
              href="#"
              sx={{
                color: "#ff3d00",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Terms of Service
            </Link>
            , and{" "}
            <Link
              href="#"
              sx={{
                color: "#ff3d00",
                textDecoration: "none",
                fontWeight: 500,
              }}
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
