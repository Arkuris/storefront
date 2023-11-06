import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AppBar, Toolbar } from '@mui/material';

const Footer = () => (
  <AppBar position="static" color="primary" component="footer" sx={{ top: 'auto', bottom: 0 }}>
    <Container maxWidth="xl">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography variant="body1" color="inherit">
          Arkuris Virtual Store © 2023
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Footer;