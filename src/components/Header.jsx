import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
function Header({ title }) {
  return (
    <AppBar position="static" sx={{ borderRadius: '5px', marginTop: '20px' }}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
