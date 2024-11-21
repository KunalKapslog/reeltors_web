import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import RouterComponent from './route/router';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <Header  onMenuOpen={handleMenuOpen} anchorEl={anchorEl} onMenuClose={handleMenuClose} />
      <RouterComponent />
      <Footer />
    </>
  );
}

export default App;
