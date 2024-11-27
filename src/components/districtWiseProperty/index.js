import React, { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../cards/propertyCard";

function DistrictWiseProperty() {
  const [tabValue, setTabValue] = useState(0);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const propertiesWithImages = propertiesData.map((property) => ({
      ...property,
      imageUrl: require(`../../assets/images/${property.imageUrl}`),
    }));
    setProperties(propertiesWithImages);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            marginBottom: 1,
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 600,
            fontStyle: "italic",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: 0,
              width: "40px",
              height: "3px",
              background: "linear-gradient(90deg, #FF3131, #991D1D)",
              borderRadius: "1px",
            },
          }}
        >
          Project in Delhi
        </Typography>

        {/* Tabs with underline */}
        <Box sx={{ position: "relative", marginBottom: 1 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
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
            <Tab label="Project In Demand" />
            <Tab label="New Launched" />
          </Tabs>
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
      </Box>

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

export default DistrictWiseProperty;
