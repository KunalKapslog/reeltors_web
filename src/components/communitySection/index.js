import React, { useEffect, useRef } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import FireIcon from "@mui/icons-material/Whatshot";
import image1 from "../../assets/images/handpicked/image1.png";
import image2 from "../../assets/images/handpicked/image2.png";
import image3 from "../../assets/images/handpicked/image3.png";

function CommunitySection() {
  const scrollContainerRef = useRef(null);

  const communityData = [
    { name: "Dwarka", imageUrl: image1 },
    { name: "Sector14", imageUrl: image2 },
    { name: "Dwarka", imageUrl: image3 },
    { name: "Sector 13", imageUrl: image1 },
    { name: "Sector14", imageUrl: image2 },
    { name: "Janakpuri", imageUrl: image3 },
    { name: "Uttamnagar", imageUrl: image1 },
    { name: "Sector 13", imageUrl: image2 },
    { name: "Dwarka", imageUrl: image3 },
  ];

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <Box sx={{ textAlign: "center", padding: 2, py: 10 }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 3,
        }}
      >
        <FireIcon style={{ width: 25, height: 30, marginRight: 8 }} />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 500,
            fontStyle: "italic",
          }}
        >
          Handpicked Community for you
        </Typography>
      </Box>

      {/* Community Items (Horizontally Scrollable, Centered, No scrollbar) */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          justifyContent: {xs:"flex-start",md:'center'},
          alignItems: "center",
          flexWrap: "nowrap",
          overflowX: "auto",
          gap: 2,
          paddingBottom: 1,
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none", 
          },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        {communityData.map((community, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <Avatar
              src={community.imageUrl}
              alt={community.name}
              sx={{
                width: 60,
                height: 60,
                marginBottom: 1,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 200,
                fontSize: "12px",
              }}
            >
              {community.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CommunitySection;
