import React from "react";
import { Card, CardMedia, Box, Typography, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import bookmarkIcon from "../../../assets/icons/bookmark.svg";


const PropertyCard = ({ property }) => {
  return (
    <Card
      sx={{
        width: {
          xs: "49%", 
          sm: "40%",
          md: "30%",
          lg: "20%",
          xl: "20%",
        },
        borderRadius: 2,
        border: "1px solid #EAEAE7",
        flex: "0 0 auto", 
      }}
    >
      {/* Property Image */}
      <Box sx={{ position: "relative" }}>
        <Box sx={{ padding: { xs: 1, md: 2 } }}>
          <CardMedia
            component="img"
            image={property.imageUrl}
            alt={property.title}
            sx={{
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: 10, md: 20, xl: 20 },
            right: { xs: 10, md: 20, xl: 20 },
            borderRadius: "50%",
          }}
        >
          <img src={bookmarkIcon} alt="Bookmark" width={25} height={25} />
        </Box>
      </Box>

      {/* Property Details */}
      <Box sx={{ padding: 1 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
        >
          {property.title}
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            sx={{
              float: "right",
              fontSize: { xs: "0.55rem", sm: "0.8rem" },
            }}
          >
            {property.area}
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: { xs: "0.55rem", sm: "0.8rem" } }}
        >
          {property.location}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginY: 1,
            fontSize: { xs: "0.55rem", sm: "0.8rem" },
          }}
        >
          {property.details}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <VisibilityIcon fontSize="small" color="disabled" />
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "0.55rem", sm: "0.8rem" } }}
            >
              {property.views}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF3131",
              textTransform: "none",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: { xs: "0.40rem", sm: "0.800rem" },
            }}
            size="small"
          >
            Book Appointment
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default PropertyCard;
