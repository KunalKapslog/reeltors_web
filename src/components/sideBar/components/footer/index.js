import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutline";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const FooterSideBar = () => {
    return (
        <Box
            sx={{
                bgcolor: "white",
                padding: "16px",
            }}
        >
            {/* About Us and Get Help Links */}
            <Box py={2} sx={{ border: '1px solid #BBBBBB', px: 2, borderRadius: '8px' }}>
                <Button
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#333",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <InfoOutlinedIcon />
                        <Typography sx={{ fontWeight: 500 }}>About Us</Typography>
                    </Box>
                    <ChevronRightOutlinedIcon />
                </Button>
                <Divider />
                <Button
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "14px",
                        color: "#333",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <HelpOutlineOutlinedIcon />
                        <Typography sx={{ fontWeight: 500 }}>Get Help</Typography>
                    </Box>

                    <ChevronRightOutlinedIcon />
                </Button>
                <Divider />
            </Box>

            {/* App Download Section */}
            <Box
                sx={{
                    textAlign: "center",
                    marginTop: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: 'center',
                        padding: 1,
                    }}
                >
                    <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Google Play"
                        style={{
                            width: 150,
                        }}
                    />
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        style={{
                            width: 120,
                        }}
                    />
                </Box>

                <Typography
                    variant="caption"
                    sx={{
                        color: "#1E1B0C",
                        fontFamily: "'Gilroy', sans-serif",
                        fontStyle: "italic",
                        fontSize: '12px',
                    }}
                >
                    Now Available on
                </Typography>
            </Box>
        </Box>
    );
};

export default FooterSideBar;
