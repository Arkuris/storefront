import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'; // Import a loading spinner component
import Alert from '@mui/material/Alert'; // Import a component for displaying error messages
import { addToCart } from '../../store/cart/index.js';
import { loadProducts } from '../../store/products/index.js'; // Make sure this path is correct

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadProducts());
    }
  }, [dispatch, status]);

  if (!products.results || !Array.isArray(products.results)) {
    return <div>No products available or still loading...</div>;
  }
  
  const filteredProducts = activeCategory
  ? products.results.filter((product) => product.category === activeCategory)
  : products.results; 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === 'loading') {
    return <CircularProgress />; // Show loading indicator while products are loading
  }

  if (status === 'failed') {
    return <Alert severity="error">{error}</Alert>; // Show error message if loading failed
  }

  return (
    <Grid container spacing={2}>
      {filteredProducts.map((product) => (
        <Grid item key={product._id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Description: {product.description}
              </Typography>
              <Typography color="textSecondary">
                Price: ${product.price.toFixed(2)}
              </Typography>
              <Typography color="textSecondary">
                Inventory: {product.inventoryCount}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleAddToCart(product)}
                disabled={product.inventoryCount === 0} // Disable button if inventory is 0
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;

