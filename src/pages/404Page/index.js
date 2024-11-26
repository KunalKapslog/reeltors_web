import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        bgcolor: '#f5f5f5',
        padding: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '4rem', fontWeight: 'bold', color: '#333' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: '#555', mb: 3 }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        sx={{ textTransform: 'none', bgcolor: '#1976d2', ':hover': { bgcolor: '#155fa0' } }}
        onClick={handleGoHome}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
