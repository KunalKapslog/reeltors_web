import React from 'react';
import { Box, Typography } from '@mui/material';
import bgImage from "../../assets/images/bgLanding1.png";
import PropertySearch from '../../components/searchBar';
import NewListings from '../../components/newListing';
import CommunitySection from '../../components/communitySection';
import Properties from '../../components/property';
import CommunityHubCTA from '../../components/communityHub';
import QuickLinks from '../../components/quicklinks';
import ActionCards from '../../components/actionCard';
import ExploreProperties from '../../components/property';
import DistrictWiseProperty from '../../components/districtWiseProperty';
import TopLocalities from '../../components/topLocalities';
import PopularCommunities from '../../components/popularCommuity';
import PopularCities from '../../components/popularCities';
import Header from '../../components/header';
import Footer from '../../components/footer';

const LandingPage = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      <Header onMenuOpen={handleMenuOpen} anchorEl={anchorEl} onMenuClose={handleMenuClose} />
      <Box
        sx={{
          height: { xs: '150px', sm: '200px', md: '450px' },
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Main Heading */}
        <Typography
          variant="h3"
          color="white"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem', md: '4rem' },
            fontWeight: 'bold',
            fontFamily: 'Gilroy-Heavy, sans-serif',
            mb: 4

          }}
        >
          Find your Dream<span style={{ color: '#FF3131' }}> place</span>
        </Typography>

        {/* Positioned PropertySearch */}
        <Box
          sx={{
            position: 'absolute',
            bottom: {
              xs: '-75%',
              sm: '-45%',
              md: '-25%',
              lg: '-30%'
            },
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: '90%', sm: '80%', md: '70%' },
            zIndex: 2,
          }}
        >
          <PropertySearch />
        </Box>
      </Box>

      {/* Spacer below PropertySearch */}
      <Box
        sx={{
          height: { xs: '60px', sm: '120px', md: '200px', },
          background: '#F5F5F5'

        }}
      />
      <NewListings />
      <Box sx={{ background: '#F5F5F5', padding: { xs: 0, md: 2 } }}>

        {/* Other Components */}
        <CommunitySection />
        <ExploreProperties />
        <DistrictWiseProperty />
        <TopLocalities />
        <CommunityHubCTA />
        <PopularCommunities />
        <PopularCities />
        <ActionCards />
        <QuickLinks />
      </Box>
      <Footer />
    </>
  );
};

export default LandingPage;
