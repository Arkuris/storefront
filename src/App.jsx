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
import SimpleCart from './Components/Cart/index.jsx';

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box display="flex" flexGrow={1}>
        <Toolbar />
        <Categories />
        <Box display="flex" justifyContent="center" width="100%">
          <Products />
          <SimpleCart /> 
        </Box>
      </Box>
      <Footer />
    </Box>
  </Provider>
);

export default App;
