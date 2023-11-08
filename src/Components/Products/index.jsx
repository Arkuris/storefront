import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { addToCart } from '../../store/cart/index.js';
import Button from '@mui/material/Button';


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const activeCategory = useSelector((state) => state.categories.activeCategory);

  const filteredProducts = activeCategory
    ? products.filter((product) => product.category === activeCategory)
    : products;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Grid container spacing={2}>
      {filteredProducts.map((product) => (
        <Grid item key={product.name} xs={12} sm={6} md={4}>
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
