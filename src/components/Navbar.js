import React from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';

const Navbar = () => {

  return (
    <div className="title">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            Organizational Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar