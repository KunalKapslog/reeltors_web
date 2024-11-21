import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import arrowForwardImage from '../../assets/images/arrowForward.png';

const NewListings = () => {
  const cardData = Array(4).fill({ title: "New Listings", count: "90000+" });

  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'flex' },
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 2,
        padding: 3,
        py:5,
        background:'#F5F5F5',
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 26px)' },
            boxShadow: 3,
            borderRadius: 2,
            padding:3
          }}
        >
          <CardContent   sx={{
              display: 'flex',
              flexDirection: 'column',
            }}>
                <Box sx={{alignSelf:'center'}}>

            <Typography variant="h5" component="div" fontWeight="bold">
              {card.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {card.count}
            </Typography>
            </Box>

            <Box
              component="img"
              src={arrowForwardImage}
              alt="Arrow Forward"
              sx={{ width: '30%',
                display:'flex',
                justifyContent:'flex-end',
                marginLeft:'auto'
              }}
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NewListings;
