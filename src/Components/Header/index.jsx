import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const itemCount = cartItems.reduce((count, item) => count + (item.quantity || 1), 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Virtual Store
        </Typography>
        <Typography variant="h6">
          Cart ({itemCount})
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
