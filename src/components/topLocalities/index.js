import React from "react";
import { Box, Typography, Tabs, Tab, Card, CardMedia, CardContent, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import houseImage from "../../assets/images/house.png"
import bookmarkIcon from "../../assets/icons/bookmark.svg"



function TopLocalities() {
  const properties = [
    {
      title: "3 BHK Apartment",
      location: "Sector 35, Chandigarh",
      area: "240 sq. ft",
      details: "2 Bedrooms | 3 Bathrooms | 1 Balcony",
      views: "5k+",
      imageUrl: houseImage,
    },
    {
      title: "3 BHK Apartment",
      location: "Sector 35, Chandigarh",
      area: "240 sq. ft",
      details: "2 Bedrooms | 3 Bathrooms | 1 Balcony",
      views: "5k+",
      imageUrl: houseImage,
    },
    {
      title: "3 BHK Apartment",
      location: "Sector 35, Chandigarh",
      area: "240 sq. ft",
      details: "2 Bedrooms | 3 Bathrooms | 1 Balcony",
      views: "5k+",
      imageUrl: houseImage,
    },
    {
      title: "3 BHK Apartment",
      location: "Sector 35, Chandigarh",
      area: "240 sq. ft",
      details: "2 Bedrooms | 3 Bathrooms | 1 Balcony",
      views: "5k+",
      imageUrl: houseImage,
    },
  ];

  const [selectedLocality, setSelectedLocality] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedLocality(newValue);
  };

  return (
    <Box sx={{ padding: 1 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{
          fontFamily: "Gilroy, sans-serif",
          fontWeight: 600,
          fontStyle: "italic",
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-4px",
            left: 0,
            width: "15%",
            height: "3px",
            background: "linear-gradient(90deg, #FF3131, #991D1D)",
            borderRadius: "2px",
          },
        }}>
          Top Localities
        </Typography>
        <Typography variant="body2" color="primary" sx={{ cursor: "pointer", color: '#1E1B0C' }}>
          See All
        </Typography>
      </Box>

      {/* Tabs for Localities */}
      <Box sx={{ position: "relative", marginBottom: 1 }}>

        <Tabs
          value={selectedLocality}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": {
              background: "linear-gradient(90deg, #FF3131, #991D1D)",
              height: "3px",
              zIndex: 2

            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontFamily: "Gilroy, sans-serif",
              fontStyle: "italic",
              color: 'black',


            },
          }}
        >
          <Tab label="Janakpuri" />
          <Tab label="Dwarka" />
          <Tab label="Uttamnagar" />
          <Tab label="Janakpuri" />
          <Tab label="Dwarka" />
          <Tab label="Uttamnagar" />
        </Tabs>

        {/* Gray underline spanning full width */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "1px",
            backgroundColor: "lightgray",
            zIndex: 1, 
          }}
        />
      </Box>

      {/* Property Cards */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 1, 
          scrollBehavior: "smooth", 
          paddingBottom: 2,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {properties.map((property, index) => (
          <Card
            key={index}
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
              <Box sx={{ padding: {xs:1,md:2} }}>
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
                  top: {xs:10,md:20,xl:20},
                  right: {xs:10,md:20,xl:20},
                  padding: 0.5,
                  borderRadius: "50%",
                }}
              >
                <img src={bookmarkIcon} alt="Bookmark" width={25} height={25} />
              </Box>
            </Box>

            {/* Property Details */}
            <Box sx={{padding:1}}>
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
                    fontSize: { xs: "0.40rem", sm: "0.875rem" },
                  }}
                  size="small"
                >
                  Book Appointment
                </Button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

    </Box>
  );
}

export default TopLocalities;
