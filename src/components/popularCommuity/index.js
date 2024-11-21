import React, { useRef } from "react";
import { Box, Typography, Card, CardContent, CardMedia, IconButton } from "@mui/material";
import dummyImage from "../../assets/images/commuityImage.png";
import arrowForward from "../../assets/images/arrowForward.png";
import arrowBack from "../../assets/images/arrowBack.png";

function PopularCommunities() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const communities = [
    {
      title: "#Noida Community",
      message: "#Hello everyone! 👋 I recently moved to the Downtown area with",
      imageUrl: dummyImage,
    },
    {
      title: "#Gurgaon Community",
      message: "#Hello everyone! 👋 I recently moved to the Downtown area with",
      imageUrl: dummyImage,
    },
    {
      title: "#Noida Community",
      message: "#Hello everyone! 👋 I recently moved to the Downtown area with",
      imageUrl: dummyImage,
    },
    {
      title: "#Gurgaon Community",
      message: "#Hello everyone! 👋 I recently moved to the Downtown area with",
      imageUrl: dummyImage,
    },
  ];

  return (
    <Box sx={{ padding: 4, textAlign: "center" }}>
      {/* Header */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          marginBottom: 2,
          background: "linear-gradient(90deg, #FF3131, #991D1D)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        #popular Communities near you
      </Typography>

      {/* Scrollable Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          position: "relative",
        }}
      >
        <IconButton
          onClick={scrollLeft}
          sx={{
            bgcolor: "white",
            width: 50,
            height: 50,
            borderRadius: "50%",
            boxShadow: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <img src={arrowBack} alt="Scroll Left" style={{ width: "30px", height: "10px" }} />
        </IconButton>



        {/* Community Cards */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            padding: 1,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {communities.map((community, index) => (
            <Card
              key={index}
              sx={{
                minWidth: "250px",
                maxWidth: "250px",
                flexShrink: 0,
                borderRadius: 2,
                boxShadow: 0,
                scrollSnapAlign: "center",
                border:'0.5px solid #DBDBD6'
              }}
            >
              <CardContent>
                {/* Community Title */}
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ marginBottom: 1, textAlign: "left" }}
                >
                  {community.title}
                </Typography>

                {/* Row: Image and Message */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <CardMedia
                    component="img"
                    image={community.imageUrl}
                    alt={community.title}
                    sx={{ width: 50, height: 50, borderRadius: 2 }}
                  />
                  <Typography variant="body2" color="text.secondary"  sx={{ textAlign: "left",fontSize:'12px' }}>
                    {community.message}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Right Arrow (using custom arrow image) */}
        <IconButton
          onClick={scrollRight}
          sx={{
            bgcolor: "white",
            height: 50,
            width: 50,
            borderRadius: "50%",
            boxShadow: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <img src={arrowForward} alt="Scroll Right" style={{ width: '30px', height: '10px' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default PopularCommunities;
