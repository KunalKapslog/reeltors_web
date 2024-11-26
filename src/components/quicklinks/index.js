import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid, Link, IconButton } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const cities = ["Gurgaon", "Delhi", "Goa", "Mumbai", "Kolkata"];
const sectors = Array(10).fill("Flats for Sale in Sector 13");

function QuickLinks() {
  const [activeTab, setActiveTab] = useState(0);
  const [collapsed, setCollapsed] = useState(true);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box p={1}>
      {/* Title with Expand/Collapse Icon */}
      <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={toggleCollapse}>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
          sx={{
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 600,
            fontStyle: "italic",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-2px",
              left: 0,
              width: "20%",
              height: "3px",
              background: "linear-gradient(90deg, #FF3131, #991D1D)",
              borderRadius: "2px",
            },
          }}
        >
          Quick Links
        </Typography>
        <IconButton sx={{ ml: 1, mb: 2 }}>
          {collapsed ? <ExpandMore /> : <ExpandLess />}
        </IconButton>
      </Box>

      {/* Content */}
      {!collapsed && (
        <Box mt={1}>
          {/* Tabs */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="transparent" // Hides the default underline
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontFamily: "Gilroy, sans-serif",
                fontWeight: 500, // Gilroy-Medium equivalent
                fontStyle: "normal",
                color: "black",
                whiteSpace: "nowrap", // Prevents text wrapping
                marginRight: 2, // Horizontal gap between tabs
              },
              "& .Mui-selected": {
                background: "linear-gradient(90deg, #FF3131, #991D1D)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              },
            }}
          >
            <Tab label="Flats for Sale" />
            <Tab label="Flats for Rent" />
            <Tab label="Properties for Sale" />
          </Tabs>

          {/* Divider */}
          <Box borderBottom="2px solid #e0e0e0" width="100%" />

          {/* Content */}
          {activeTab === 0 && (
            <Grid container spacing={2} mt={2} sx={{ textAlign: "center" }}>
              {cities.map((city, index) => (
                <Grid item xs={12} sm={4} md={2} key={index}>
                  <Typography mb={1} sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "inline-block",
                    marginBottom: 1,
                    paddingX: 1,
                    fontFamily: "Gilroy, sans-serif",
                    color:'#000000',
                    fontWeight: 300,
                    fontSize: "16px",

                  }}>
                    Flats for Sale in {city}
                  </Typography>
                  {sectors.map((sector, i) => (
                    <Link
                      key={i}
                      href="#"
                      display="block"
                      color="inherit"
                      underline="none"
                      sx={{ fontSize: "12px", mb: 0.5,
                        fontFamily: "Gilroy, sans-serif",
                        fontWeight: 400,
                        color:'#1E1B0C',
                        opacity:0.6
                       }}
                    >
                      {sector}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
}

export default QuickLinks;
