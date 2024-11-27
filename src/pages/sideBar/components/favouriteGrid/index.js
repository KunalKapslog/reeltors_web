import React from "react";
import { Box, Typography } from "@mui/material";
import { ApartmentIcon,HeartIcon } from "../../../../assets/icons";


const FavouriteCard = ({ icon, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "8px",
        bgcolor: "#fff",
        cursor: "pointer",
        transition: "all 0.3s ease",
        ":hover": {
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        },
      }}
    >
      <Box
        sx={{
          bgcolor: "#F8F8F8",
          borderRadius: "50%",
          width: 30,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "8px", 
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: "12px",
          color: "#333",
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export const FavouritesGrid = () => {
  return (
    <Box
      py={2}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr", 
        gap: 2,
        marginBottom: 2,
      }}
    >
      <FavouriteCard
        icon={<HeartIcon height={30} width={30} />}
        title="Favourites"
      />

      <FavouriteCard
        icon={<ApartmentIcon height={30} width={30} />}
        title="Your properties"
      />
    </Box>
  );
};

export const PropertyGrid = () => {
  return (
    <Box
      py={1}
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr", 
        gap: 2,
        marginBottom: 2,
      }}
    >
      {/* Buy Card */}
      <FavouriteCard
        icon={<ApartmentIcon height={30} width={30} />}
        title="Buy"
      />

      {/* Rent Card */}
      <FavouriteCard
        icon={<ApartmentIcon height={30} width={30} />}
        title="Rent"
      />

      {/* Commercial Card */}
      <FavouriteCard
        icon={<ApartmentIcon sx={{ fontSize: 50, color: "grey" }} />}
        title="Commercial"
      />
    </Box>
  );
};

export default { FavouritesGrid, PropertyGrid };
