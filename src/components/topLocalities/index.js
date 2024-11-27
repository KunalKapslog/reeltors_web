import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropertyCard from "../cards/propertyCard";

const propertiesData =
  [
    {
      "title": "3 BHK Apartment in Janakpuri",
      "location": "Janakpuri, Delhi",
      "area": "240 sq. ft",
      "details": "2 Bedrooms | 3 Bathrooms | 1 Balcony",
      "views": "5k+",
      "imageUrl": "house.png"
    },
    {
      "title": "2 BHK Apartment in Dwarka",
      "location": "Dwarka, Delhi",
      "area": "180 sq. ft",
      "details": "1 Bedroom | 2 Bathrooms | 1 Balcony",
      "views": "3k+",
      "imageUrl": "house.png"
    },
    {
      "title": "4 BHK Apartment in Uttamnagar",
      "location": "Uttamnagar, Delhi",
      "area": "320 sq. ft",
      "details": "3 Bedrooms | 4 Bathrooms | 2 Balconies",
      "views": "10k+",
      "imageUrl": "house.png"
    },
    {
      "title": "1 BHK Apartment in Rohini",
      "location": "Rohini, Delhi",
      "area": "120 sq. ft",
      "details": "1 Bedroom | 1 Bathroom | 1 Balcony",
      "views": "1k+",
      "imageUrl": "house.png"
    },
    {
      "title": "2 BHK Apartment in Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "area": "200 sq. ft",
      "details": "2 Bedrooms | 2 Bathrooms | 1 Balcony",
      "views": "4k+",
      "imageUrl": "house.png"
    }
  ]


function TopLocalities() {
  const [properties, setProperties] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState(0);

  const localities = ["Janakpuri", "Dwarka", "Uttamnagar", "Rohini", "Karol Bagh"];

  useEffect(() => {
    const propertiesWithImages = propertiesData.map((property) => ({
      ...property,
      imageUrl: require(`../../assets/images/${property.imageUrl}`),
    }));
    setProperties(propertiesWithImages);
  }, []);

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(localities[selectedLocality].toLowerCase())
  );

  const handleTabChange = (event, newValue) => {
    setSelectedLocality(newValue);
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
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
          }}
        >
          Top Localities
        </Typography>
        <Typography
          variant="body2"
          sx={{
            cursor: "pointer",
            color: "#1E1B0C",
            textDecoration: "underline",
          }}
        >
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
              zIndex: 2,
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontFamily: "Gilroy, sans-serif",
              fontStyle: "italic",
              color: "black",
            },
          }}
        >
          {localities.map((locality, index) => (
            <Tab key={index} label={locality} />
          ))}
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

      {/* Property Cards - Horizontal Scroll */}
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
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No properties available for {localities[selectedLocality]}.
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default TopLocalities;
