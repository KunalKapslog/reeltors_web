import React from "react";
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
import AppleIcon from "@mui/icons-material/Apple";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const GoogleIcon = () => (
    <img
        src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
        alt="Google Icon"
        style={{ width: 20, height: 20 }}
    />
);

const LoginPage = () => {
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
                overflowX: "hidden",
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
                    sx={{ position: "absolute", top: 10, left: 8 }}
                    onClick={() => navigate("/")}
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
                        onClick={() => navigate("/signup")}
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
                <Box px={{ xs: 2, sm: 5 }} py={{ xs: 2, sm: 2 }}>
                    {/* Heading */}
                    <Typography
                        py={2}
                        // align="center"
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
                        Enter your email or Phone number to Log in
                    </Typography>

                    {/* Email Input */}
                    <TextField
                        fullWidth
                        placeholder="Email Id"
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
                        placeholder="Password"
                        type="password"
                        variant="outlined"
                        sx={{
                            marginBottom: 1,
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
                            startIcon={<AppleIcon />}
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
                            startIcon={<GoogleIcon style={{ color: "#EA4335" }} />}
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
