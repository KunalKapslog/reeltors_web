import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import menuImage from "../../assets/images/menu.png";
import mobileImage from "../../assets/images/mobile.png"
import Sidebar from "../../pages/sideBar";
import { useLoginModal } from '../../context';

const Header = ({onLoginClick}) => {

  const [sidebar, setSidebar] = useState(false);
  const { openLoginModal } = useLoginModal(); 

  const handleSideBar = () => {
    setSidebar(!sidebar);
  }


  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(to right, #FF3131, #991D1D)',
        }}
      >
        <Toolbar>
          <Typography variant="h5" sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            fontFamily: 'Gilroy-Heavy, sans-serif',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'inherit',
          }}
            component="a"
            href="#"
          >
            ReelTor.com
          </Typography>



          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              <Button
                color="inherit"
                sx={{
                  marginLeft: 2,
                  padding: '8px 16px',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Gilroy, sans-serif',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                <img
                  src={mobileImage}
                  alt='Mobile Icon'
                  style={{ width: 25, height: 25, marginRight: 8 }}
                />
                Download Mobile App
              </Button>

              <Button
                color="inherit"
                sx={{
                  border: '1.5px solid white',
                  marginLeft: 2,
                  padding: '2px 16px',
                  fontSize: '0.875rem',
                  borderRadius: '12px',
                  fontFamily: 'Gilroy, sans-serif',
                  fontWeight: 500,
                  textTransform: 'none',
                }}
              >
                Post Property
              </Button>
            </Box>

            {/* Menu Icon */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleSideBar}
              aria-label="menu"
              sx={{
                display: { xs: 'flex', sm: 'flex' },
                marginLeft: 2,
              }}
            >
              <img src={menuImage} alt="menu" style={{ width: 35, height: 35 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={sidebar} toggleSidebar={handleSideBar} />
    </>
  )
};

export default Header;
