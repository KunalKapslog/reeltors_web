import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../../../redux/features/users/userSlice";
import { AvatarIcon } from "../../../../assets/icons";
import { useLoginModal } from "../../../../context";

const HeaderSection = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const { openLoginModal } = useLoginModal();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(clearUser());
  };

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
          <AvatarIcon />
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
            Hello, {user ? user.name : "Guest"}
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
            {user ? user.email : "Get personalised property that meets your requirement."}
          </Typography>
        </Box>
      </Box>

      {/* Login/Logout Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        {token ? (
          <Button
            variant="contained"
            sx={{
              bgcolor: "#D32F2F",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "10px",
              padding: "8px 16px",
              borderRadius: "8px",
              ":hover": {
                bgcolor: "#B71C1C",
              },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
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
          >
            Login / Signup
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default HeaderSection;





