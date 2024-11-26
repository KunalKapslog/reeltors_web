import React from "react";
import { Box, Typography, Grid, CardMedia, CardContent } from "@mui/material";
import dummyImage from "../../assets/images/commuityImage.png"; // Replace with your image path

function PopularCities() {
  const cities = [
    { name: "Delhi", properties: "12000+ properties", imageUrl: dummyImage },
    { name: "Goa", properties: "12000+ properties", imageUrl: dummyImage },
    { name: "Bangalore", properties: "12000+ properties", imageUrl: dummyImage },
    { name: "Mumbai", properties: "12000+ properties", imageUrl: dummyImage },
    { name: "Noida", properties: "12000+ properties", imageUrl: dummyImage },
    { name: "Kolkata", properties: "12000+ properties", imageUrl: dummyImage },
  ];

  return (
    <Box sx={{ padding: 1 }}>
      {/* Header Section */}
      <Typography variant="h6" fontWeight="bold" 
      sx={{ marginBottom: 4,
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
          width: "10%",
          height: "3px",
          background: "linear-gradient(90deg, #FF3131, #991D1D)",
          borderRadius: "2px",
        },
       }}
       >
        Explore Real Estate in  Popular Cities
      </Typography>

      {/* Cities Grid */}
      <Grid container spacing={3} >
        {cities.map((city, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            {/* City Container */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* Image Section */}
              <CardMedia
                component="img"
                image={city.imageUrl}
                alt={city.name}
                sx={{
                  width: 80, // Adjust width
                  height: 80, // Adjust height
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              {/* City Details */}
              <CardContent sx={{ padding: 0 }}>
                <Typography variant="h6" fontWeight="bold">
                  {city.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {city.properties}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PopularCities;
