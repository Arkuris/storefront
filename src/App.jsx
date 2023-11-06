import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Footer from './Components/Footer/index.jsx';
import Header from './Components/Header/index.jsx';
import Products from './Components/Products';
import Categories from './Components/Categories'; 

const App = () => (
  <Provider store={store}> {/* Wrap your components with Provider and pass the store */}
    <CssBaseline /> {/* Normalize the styling */}
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flex="1">
        <Toolbar /> {/* This is needed if you have a fixed AppBar */}
        <Categories /> {/* Now Categories is included in your main component */}
        <Products/>
      </Box>
      <Footer />
    </Box>
  </Provider>
);

export default App;
