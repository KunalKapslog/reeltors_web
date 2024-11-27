import React from 'react';
import { CssBaseline } from '@mui/material';
import RouterComponent from './route/router';
import { Context } from './context';

function App() {

  return (
    <Context>
      <CssBaseline />
      <RouterComponent />
    </Context>
  );
}

export default App;
