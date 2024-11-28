import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { EmailIcon, LockOutlinedIcon, RegisterAvatar } from "../../../assets/icons";
import userApi from "../../../api"; // Import your API methods

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
          <LockOutlinedIcon height={20} width={20} />
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

const SignUpPage = ({ switchToLogin, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

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
    if (!form.phoneNumber) tempErrors.phoneNumber = "Phone number is required.";
    else if (!/^\d{10}$/.test(form.phoneNumber))
      tempErrors.phoneNumber = "Enter a valid 10-digit phone number.";
    if (!form.password) tempErrors.password = "Password is required.";
    if (!form.confirmPassword)
      tempErrors.confirmPassword = "Confirm your password.";
    else if (form.password !== form.confirmPassword)
      tempErrors.confirmPassword = "Passwords do not match.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const signUpData = {
          name: form.name,
          email: form.email,
          phoneNumber: `+91${form.phoneNumber}`, // Prepending +91 to phone number
          password: form.password,
        };
  
        const response = await userApi.signUp(signUpData);
  
        // Check if token exists in the response
        if (response.token) {
          // Show success message
          setSnackbar({
            open: true,
            message: "Sign-up successful! You can now log in.",
            severity: "success",
          });
  
          // Optional: Redirect or close modal
          onClose();
          switchToLogin();
        } else if (response.message) {
          // Show a message if server returns a message field but no token
          setSnackbar({
            open: true,
            message: response.message,
            severity: "info",
          });
        } else {
          // Handle unexpected response structure
          setSnackbar({
            open: true,
            message: "Unexpected response structure from the server.",
            severity: "error",
          });
        }
      } catch (error) {
        // Handle error responses
        setSnackbar({
          open: true,
          message:
            error.message ||
            (error.response && error.response.data.message) ||
            "Sign-up failed. Please try again.",
          severity: "error",
        });
      }
    }
  };
  

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          width: "90%",
          padding: 2,
          position: "relative",
        }}
      >
        {/* Close Icon */}
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={onClose}
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
          onClick={switchToLogin}
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
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RegisterAvatar height={20} width={20} />
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
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon height={20} width={20} />
                </InputAdornment>
              ),
              sx: {
                borderRadius: 2,
              },
            }}
          />

          {/* Phone Number Input */}
          <TextField
            fullWidth
            name="phoneNumber"
            placeholder="Mobile No"
            value={form.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
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
                  <Typography sx={{ fontWeight: 500 }}>+91</Typography>
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
            toggleShowPassword={() => setShowConfirmPassword((prev) => !prev)}
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
              bgcolor: "#FF3131",
              color: "#ffffff",
              textTransform: "none",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              borderRadius: 2,
              paddingY: 1,
              mb: 3,
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

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUpPage;
