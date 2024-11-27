import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tab, Tabs
} from "@mui/material";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../cards/propertyCard";

function ExploreProperties() {

  const [selectedLocality, setSelectedLocality] = React.useState(0);

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const propertiesWithImages = propertiesData.map((property) => ({
      ...property,
      imageUrl: require(`../../assets/images/${property.imageUrl}`),
    }));
    setProperties(propertiesWithImages);
  }, []);

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
        }}
      >
        <Typography
          variant="h5"
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
              width: "12%",
              height: "3px",
              background: "linear-gradient(90deg, #FF3131, #991D1D)",
              borderRadius: "2px",
            },
          }}
        >
          Explore Properties
        </Typography>

        <Typography
          variant="body2"
          sx={{ cursor: "pointer", color: "#1E1B0C" }}
        >
          See All
        </Typography>

      </Box>

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
          <Tab label="Office" />
          <Tab label="Appartment" />
          <Tab label="House" />
          <Tab label="Flat" />
          <Tab label="PG" />
          <Tab label="Plot" />
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
          <PropertyCard key={index} property={property} />
        ))}
      </Box>


    </Box>
  );
}

export default ExploreProperties;
