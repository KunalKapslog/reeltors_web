import React from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import menuImage from "../../assets/images/menu.png";
import mobileImage from "../../assets/images/mobile.png"

const Header = ({ onMenuOpen, anchorEl, onMenuClose }) => (
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
            onClick={onMenuOpen}
            aria-label="menu"
            sx={{
              display: { xs: 'flex', sm: 'flex' },
              marginLeft: 2,
            }}
          >
            <img src={menuImage} alt="menu" style={{ width: 35, height: 35 }} />
          </IconButton>
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { sm: 'none' } }}>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={onMenuClose} component="a" href="/download-app">
              Download Mobile App
            </MenuItem>
            <MenuItem onClick={onMenuClose} component="a" href="/post-property">
              Post Property
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>

    <Box
      sx={{
        backgroundColor: 'white',
        padding: '10px 20px',
        display: { xs: 'none', sm: 'flex' },
        justifyContent: 'flex-start',
        alignItems: 'center',
        boxShadow: 1,
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          marginBottom: { xs: 2, sm: 0 },
          marginRight: { sm: 3 },
          fontFamily: 'Gilroy, Arial, sans-serif',
          fontWeight: 500,
          color: 'black'
        }}
      >
        Rent
      </Button>
      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          marginBottom: { xs: 2, sm: 0 },
          marginRight: { sm: 3 },
          fontFamily: 'Gilroy, Arial, sans-serif',
          fontWeight: 500,
          color: 'black'
        }}
      >
        Buy
      </Button>
      <Button
        variant="text"
        color="inherit"
        sx={{
          textTransform: 'none',
          marginBottom: { xs: 2, sm: 0 },
          fontFamily: 'Gilroy, Arial, sans-serif',
          fontWeight: 500,
          color: 'black'

        }}
      >
        Communities
      </Button>
    </Box>
  </>
);

export default Header;
